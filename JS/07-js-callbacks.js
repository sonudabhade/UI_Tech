// callback 

// let fun = () => {
//     console.log('fun message');
// }
// fun();

// let arg1 = () => { return 'fun message' }

// let fun = () => {
//     setTimeout(arg1, 1000);
// }

// let message = fun();
// console.log(message);

// let fun = () => {
//     setTimeout(() => {
//         return 'fun message';
//     } , 1000);
// }

// let message = fun();
// console.log(message);

// problem of async javascript 

// let fun = () => {
//     setTimeout(() => {
//         return {message: 'fun message'};
//     } , 1000);
// }

// let getFun = fun();
// console.log(getFun.message);

// solution 1. callback 

//simplified version 

let fun = (abc) => {
    setTimeout(() => {

        abc({ message: 'fun message' });

    }, 2000);
}

let someFunction = (getFun) => {
    console.log(getFun.message);
}

fun(someFunction);

let fun2 = (abc) => {
    setTimeout(() => {
       // callback({ message: 'fun message' });
        abc(10,20);
        
    }, 2000);
}

// simplified version 


let someFunction2 = (a, b) => {
    console.log("Addition in fun2",a + b);
}

fun2(someFunction2);





let sumAsync = (a, b, callback) => {
    setTimeout(() => {
        var result = a + b;
        //abc = result;
        callback(result);
        //abc(a,b);
        
    }, 2000);
}

// simplified version 

let logSum = (result) => {
    console.log(result);
}

sumAsync(1, 2, logSum);