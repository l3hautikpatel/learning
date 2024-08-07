let array1 = ['a', 1, 2, 3, 4, 5];
var array2 = ['b', 6, 7, 8, 9, 0]


console.log(array1, array2);
console.log(array1 + array2);
console.log(array1.concat(array2));
console.log([...array1, array2]);
console.log([...array1, ...array2]);


console.log(array1);
let array3 = ["A", array1.slice(1, 3)]
console.log(array3);
console.log(array1);   /// slice not remove 1 to 3 index
let array4 = ["B", array1.splice(1, 3)]
console.log(array4);
console.log(array1);   /// splice remove from 1 to 3 index






console.log(`ARRAY functions   
- push 
- pop
- shift 
- unshift
- sort
- reverse



`);