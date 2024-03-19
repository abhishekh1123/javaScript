// let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// let myCreatedDate = new Date(2024, 2, 24)
// let myCreatedDate = new Date(2024, 2, 24, 5, 40)
let myCreatedDate = new Date("03-19-2024")
// console.log(myCreatedDate.toLocaleString());

let mytimeStamp = Date.now();
// console.log(mytimeStamp);
// console.log(myCreatedDate.getTime());
 
// console.log(Math.floor(mytimeStamp / 1000));  

let myDate = new Date();
// console.log(myDate.getMonth() + 1);

console.log(myDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit"
}));