const myNums = [1, 2, 3, 4, 5];

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`Acc: ${accumulator} and Current Value: ${currentValue}`);
//     return accumulator + currentValue
// }, 0 )


// const myTotal = myNums.reduce( (acc, curr) => {
//     return acc + curr;
// }, 0)

// console.log(myTotal);


const myCart =[
    {
        course: "Python",
        price: 2999
    },
    {
        course: "C++",
        price: 1999
    },
    {
        course: "Java",
        price: 4999
    },
    {
        course: "Data Science",
        price: 8999
    },
    {
        course: "Web 3",
        price: 12999
    },
]

// const myTotal = myCart.reduce( (acc, item) => {
//     return acc + item.price;
// }, 0)

const myTotal = myCart.reduce( (acc, item) => acc + item.price, 0)
console.log(myTotal);

// New line 