// const myUser = new Object();

const myUser = {};

myUser.id = 222025;
myUser.name = "Abhishekh";
myUser.isLoggedIn = true;

// console.log(myUser);

const regularUser = {
    userName: {
        fullName: {
            firstName: "Abhishekh",
            lastName: "Kumar"
        }
    }
}

// console.log(regularUser.fullName);

const obj1 = {
    1: 'a',
    2: 'b',
    3: 'c',
}

const obj2 = {
    4: 'a',
    5: 'b',
    6: 'c',
}
const obj3 = {
    7: 'a',
    8: 'b',
    9: 'c',
}

// const result_obj = {obj1, obj2, obj3}

// const result_obj = Object.assign({}, obj1, obj2, obj3);

const result_obj = {...obj1, ...obj2, ...obj3}

// console.log(result_obj);
// console.log(obj1);
// console.log(result_obj === obj1);

// console.log(myUser);

// console.log(Object.keys(myUser));
// console.log(Object.values(myUser));
// console.log(Object.entries(myUser));

const user = [
    {
        id: 1,
        email: "abhi1@mail.com"
    },
    {
        id: 2,
        email: "abhi2@mail.com"
    },
    {
        id: 3,
        email: "abhi3@mail.com"
    },
    {
        id: 4,
        email: "abhi4@mail.com"
    }
]

// console.log(user[0].email);

// console.log(myUser.hasOwnProperty("isLogged"));


const course = {
    courseName: "My course",
    price: "499",
    courseInstructor: "Abhi"
}
//  console.log(course.courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);



// Deconstruction form react

// const navbar = ({company}) => {

// }
// navbar(company = "abhi") 



 

