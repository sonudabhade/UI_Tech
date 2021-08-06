var fruits = ['apple', 'oranges', 'mango','litchi'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[0][1]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log('number of fruits to buy =',fruits.length);

fruits[1] = 'lemmon';
fruits[4] = 'strawberries';
fruits[10] = 'Blue Berry';
console.log(fruits);
console.log(fruits[10]);

let $ = "US doller";     //valid names of variable
let _one = 1;
let day3 = "jan 3";
console.log($, _one, day3);
//let 32id = 1;     //invalid naming convention of variables

console.log(['apple', 'oranges', 'mango','litchi'] instanceof Array);
console.log(['apple', 'oranges', 'mango','litchi'] instanceof Object);