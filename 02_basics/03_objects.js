// Singleton


// Object literals 
const myKey = Symbol("key1")

const User = {
    name: "Abhishekh Kumar",
    age: 22,
    [myKey]: "Its my keys",
    location: "Guwahati",
    email: "abhishek@gmail.com",
    isLoggedIn: true,
    lastLoggedIn: ["Monday", "Tuesday", "Wednesday"]
}

// console.log(User);

// console.log(User[myKey]);

User.email = "newEmail@mail.com"

// Object.freeze(User)

// User["email"] = "newEmail2222@mail.com"

// console.log(User["email"]);

User.greeting = function(){
    console.log("My first function")
}

User.greetingTwo = function(){
    console.log(`My first function ${this.name}`)
}

console.log(User.greeting())
console.log(User.greetingTwo())