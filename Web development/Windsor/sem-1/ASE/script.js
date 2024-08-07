
const imageUpload = document.getElementById('image-upload');
const startCaptureButton = document.getElementById('start-capture-button');
const stopCaptureButton = document.getElementById('stop-capture-button');
const canvas = new fabric.Canvas('screen-canvas');

let isCapturing = false;
let videoStream;
let uploadedImage;

// Function to handle webcam capture within a specific region (modify the rectangle coordinates for your desired area)
function captureScreenRegion() {
  const displayMediaOptions = {
    video: {
      mandatory: {
        chromeMediaSource: 'screen', // Request screen capture
        chromeMediaSourceId: 'cast' // Required for screen capture
      }
    }
  };

  navigator.mediaDevices.getDisplayMedia(displayMediaOptions)
    .then(stream => {
      videoStream = stream;
      isCapturing = true;
      startCaptureButton.disabled = true;
      stopCaptureButton.disabled = false;

      const video = document.createElement('video');
      video.srcObject = stream;
      video.play();

      const captureInterval = setInterval(() => {
        const context = canvas.getContext('2d');
        context.drawImage(video, 100, 100, 400, 300); // Capture a rectangle from the screen
        canvas.renderAll();
      }, 100); // Capture frame every 100 milliseconds

      stopCaptureButton.addEventListener('click', () => {
        clearInterval(captureInterval);
        videoStream.getTracks().forEach(track => track.stop());
        isCapturing = false;
        startCaptureButton.disabled = false;
        stopCaptureButton.disabled = true;
      });
    })
    .catch(error => {
      console.error('Error capturing screen:', error);
      // Handle the error gracefully (e.g., display an error message to the user)
    });
}

imageUpload.addEventListener('change', function(event) {
  const reader = new FileReader();
  reader.onload = function(e) {
    fabric.Image.fromURL(e.target.result, (img) => {
      uploadedImage = img;
      uploadedImage.set({
        left: canvas.width / 2 - uploadedImage.width / 2, // Center the image horizontally
        top: canvas.height / 2 - uploadedImage.height / 2  // Center the image vertically
      });
      canvas.add(uploadedImage);
    });
  };
  reader.readAsDataURL(event.target.files[0]);
});

startCaptureButton.addEventListener('click', captureScreenRegion);

// Initially disable the stop capture button
stopCaptureButton.disabled = true;
