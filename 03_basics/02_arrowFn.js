const user = {
    userName: "Abhishekh Kumar",
    price: 899,

    welcomeGreeting: function(){
        console.log(`${this.userName}, Welcome to the server`)
        // console.log(this);
    }
}
// console.log(user)
// user.welcomeGreeting();
// console.log(this);


const newUser = function() {
    userName = {
        firstName: "Abhi",
        lastName: "Kumar"
    }

    console.log(userName.firstName);
}
// newUser()

// const chai = function(){
//     let userName = "Abhishekh"
//     console.log(this.userName);
// }

// chai();

const chai = () => {
    let userName = "Abhishekh"
    // console.log(this.userName);
    console.log(this);
}

// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// } // explicite return 

// const addTwo = (num1, num2) => (num1 + num2) // implicite return 


// console.log(addTwo(5, 10))

// returning a object implicetly
const impObj = () => ({username: "Abhishekh"});

// console.log( impObj());

