for(let i = 0; i <=10; i++) {
    logLoop(i)
}

function logLoop(iteration) {
    console.log(iteration);
    if(iteration % 2 == 0) {
        console.log('The number is even');
    } else {
        console.log('The number is odd');
    }
}