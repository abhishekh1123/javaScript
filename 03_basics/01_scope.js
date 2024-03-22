
if(true){
    const a = 10
    let b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    let username = "Abhishekh"

    function two(){
        let website = "google"
        console.log(`${username}'s ${website}`);
    }
    // console.log(website);
    two()
}

// one();

function addOne(num){
    return num + 1;
}

const addtwo = function(num){
    return num + 2;
}

console.log(addOne(5));

console.log(addtwo(5));