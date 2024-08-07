
let arr = [10,20,30,40];

let array = arr ;
document.write(arr + "<br>")
document.write(array +"<br>")

array.pop();

document.write(arr + "<br>")
document.write(array +"<br>")

array.push(40);

let arr2 = [...arr];

document.write(arr2 + "<br> <hr>")





function func1() {
    var a= 5;
    let al = 10 ;
    function func2() {
        var b=6;
        let bl = 12 ;
        document.write(b + "<br>" + bl);
        document.write(a + "<br>" + al);
    }
    document.write(a + " a<br>al " + al);
    document.write(b + "<br>" + bl);
    func2();
}

func1();
document.write(b + "<br>" + bl);