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
    // console.log(`Welcome Message ${i}`);
}

// Maps
const map = new Map();

map.set('IN', 'India')
map.set('EN', 'England')
map.set('FR', 'France')
map.set('USA', 'United State of America')

// for (const key of map) {
//     console.log(key);
// }

// for (const [key, value] of map) {
    // console.log(key, ': ', value);
// }

const myObject = {
    game1: "PUBG",
    game2: "BGMI",
    game3: "Free Fire"
}

// Won't work as object is not iterable

// for (const key of myObject) {
//     console.log(key);
// }

// for (const [key, value] of myObject) {
//     console.log(key, ': ', value);
// }