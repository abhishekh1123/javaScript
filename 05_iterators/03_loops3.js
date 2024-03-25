// for of

const arr = [1, 2, 3, 4, 5, 7, 8, 9]

for (const i of arr) {
    // console.log(i);
}

let welcome = "Hello World"

for (const i of welcome) {
    if (i == " ") {
        continue
    }
    console.log(`Welcome Message ${i}`);
}

