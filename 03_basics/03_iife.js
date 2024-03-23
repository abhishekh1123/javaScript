// IIFE => immediately invoked function Expression

// const chai = function(){
//     console.log(`DB Connected`);
// }
// chai();

const chai = (function(){
    console.log(`DB Connected`);
})();

// named iife
(function chai2() {
    console.log(`DB Connected two`);
})();

// unnamed iife
( () => {
    console.log(`iife with arrow function`);
} )();

( (name) => {
    console.log(`My name is ${name}`);
} )(`Abhi`);