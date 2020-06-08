// Tuesday 06/02/20


/*** Challenge 1 ***/
// Write a function that adds together all the numbers between any two numbers.
// Your function will accept two parameters. One for the starting number and another for the ending number.
// console.log the final sum of the numbers.

function sum(n1, n2) {
    let sum = 0;
    for(let i = n1; i <= n2; i++) {
        sum += i;
    }
    console.log(sum);
}

sum(1, 100);
sum(35, 77);
sum(234, 567);

/*** Challenge 2 ***/

let pet = {
    animal: 'dragon',
    name: 'Rolo',
    gender: 'male',
    age: 253,
    likes: ['sheep', 'burningStuff', 'screeching', 'flying'],
}

/*** Challenge 3 ***/

function trapezoid(b1, b2, h) {
    let area = 0.5*(b1 + b2)*h;
    console.log(area);
}

trapezoid(15,21,20);