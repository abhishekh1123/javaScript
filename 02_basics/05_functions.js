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

