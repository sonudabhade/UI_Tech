function fun() {
    console.log('This is a function.')
}

let fun2 = () => {
    console.log('fun2 function');
    return 'aaaa';
};

let fun3 = (a, b) => {
    console.log(a + b);
};

fun();
fun2();

fun3();
fun3(20);
fun3(10, 20);
fun3('Sonu', ' Monu');
fun3(5, 20, 30);



// let SumAsync = (a,b) => {

//     setTimeout(  () => {
//         var result = a + b;
//         return result;
//     }, 1000);
// }
// console.log(SumAsync(4,2));

// function logSum( result ){
//     console.log( result );
// }
// console.log(SumAsync(1,2, logSum));


let fun4 = (abc) => {
    setTimeout(() => {
       // callback({ message: 'fun message' });
        abc(10,20);
        
    }, 2000);
}

// simplified version 


let someFunction = (a, b) => {
    console.log(a + b);
}

fun4(someFunction);

// DOM 