//the program will be run between the time you determinate.
setTimeout(() =>{
   console.log('inside the function');
}, 2000);

//example
console.log('before the function');
setTimeout(() => {
    console.log('inside of function');
}, 2000);
console.log('after function');

//callback
const doSomething = callback => {
    var n1 = 2, n2= 56

    return n1 + n2;
    const result = 
    callback(result);
}
doSomething(result =>{
    console.log(result);
}) 
console.log(doSomething());