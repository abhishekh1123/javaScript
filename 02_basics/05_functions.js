// console.log("A");
// console.log("b");
// console.log("h");
// console.log("i");
// console.log("s");
// console.log("h");
// console.log("e");
// console.log("k");
// console.log("h");

function sayMyName(){
    console.log("A");
    console.log("b");
    console.log("h");
    console.log("i");
    console.log("s");
    console.log("h");
    console.log("e");
    console.log("k");
    console.log("h");
}

// sayMyName(); //sayMyName = reference    () = excution

function assTwoNumbers(num1, num2){
    return (num1 + num2)
}

// console.log(assTwoNumbers(8, null))

function loginUserMessage(userName) {
    if(!userName){
        console.log("Please Enter a name");
        return;
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage())

//in array we use [...num1, ...num2, ...num3] as spread operator for the 
//here ...num is rest operator

function calculateCartPrice(...num){
    return num;
}

// console.log(calculateCartPrice(100, 200, 300, 400));


const user = {
    username: "Abhishekh Kumar",
    prices: 899
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
}

// handleObject(user);
// handleObject({
//     username: "Abhi K",
//     prices: 699
// })

const myNewArray = [100, 200, 300, 400]

function returnArray(getArray){
    return getArray[2]
}

// console.log(returnArray([500, 600, 400, 100]));