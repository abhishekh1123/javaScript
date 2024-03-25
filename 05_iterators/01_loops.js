// for loops
for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(i);
}

// multiplication table

for (let i = 1; i <= 10; i++) {
    // console.log(`Table of ${i}`);

    for (let j = 1; j <= 10; j++) {
        
        // console.log(`${i} * ${j} = ${i*j}`);
        // console.log(i + ' * ' + j + ' = ' + i*j);
        
    }
    
}

// continue and break statement

for (let i = 1; i <= 10; i++) {
    
    if(i == 5){
        // console.log(`${i} is detected`);
        break;
    }
    // console.log(`Value if i is ${i}`);
}

for (let i = 1; i <= 10; i++) {
    
    if(i == 5){
        console.log(`${i} is detected`);
        continue;
    }
    console.log(`Value if i is ${i}`);
}