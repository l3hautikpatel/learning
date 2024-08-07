const fs = require('node:fs/promises');
const { arch } = require('node:os');

fs.writeFile("./new.txt", "hello bhautik this the file name and wanted to eork directly form this " ,(arr)=>{
    console.log(arr);
    
})

fs.appendFile("./new.txt" , "\nthis is append afterward in this file and wanted to make this is possible by this ",(arr)=>{
    if (arr) {
        console.log(arr);
    }else console.log("file created and write and append as well as in it ");
    
})