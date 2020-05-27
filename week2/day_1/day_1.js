// 05/26/20

/*** Challenge 1 ***/

// fizzBuzz();
// fizzBuzzTernary();
// fizzBuzzSwitch();

// function fizzBuzz() {
//     console.log('Fizz Buzz Loop');
//     for (let i = 0; i <= 100; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log("Fizz Buzz");
//         }
//         else if (i % 3 == 0) {
//             console.log("Fizz");
//         }
//         else if (i % 5 == 0) {
//             console.log("Buzz");
//         }
//         else {
//             console.log(i);
//         }
//     }
// }

// function fizzBuzzTernary() {
//     console.log('Fizz Buzz Ternary');
//     for (let i = 1; i <= 100; i++) {
//         (i % 3 == 0 && i % 5 == 0) ?
//             console.log("Fizz Buzz") : (i % 3 == 0) ?
//                 console.log("Fizz") : (i % 5 == 0) ?
//                     console.log("Buzz") : console.log(i);
//     }
// }

// function fizzBuzzSwitch() {
//     console.log('Fizz Buzz Switch');
//     for (let i = 1; i <= 100; i++) {
//         switch (true) {
//             case (i % 3 == 0 && i % 5 == 0):
//                 console.log("Fizz Buzz");
//                 break;
//             case (i % 3 == 0):
//                 console.log("Fizz")
//                 break;
//             case (i % 5 == 0):
//                 console.log("Buzz");
//                 break;
//             default:
//                 console.log(i);
//         }
//     }
// }


/*** Challenge 2 ***/

let pies = ['apple', 'blueberry', 'peach', 'chocolate peanut butter', 'cherry', 'sugar', 'lemon meringue', 'chicken pot', 'shepherd', 'key lime'];
// Bronze();
// Silver();
// Gold();
// Platinum(pies);

function Bronze() {
    let fruits = ['apple', 'blueberry', 'peach', 'cherry', 'key lime'];
    for (fruit of fruits) {
        for (pie of pies) {
            if (fruit == pie) {
                console.log(`${pie} is a fruit pie!`);
            }
        }
    }
}

function Silver() {
    let fruits = ['apple', 'blueberry', 'peach', 'cherry', 'key lime'];
    for (let f = 0; f <= fruits.length - 1; f++) {
        for (let i = 0; i <= pies.length - 1; i++) {
            if (fruits[f] == pies[i]) {
                console.log(`${fruits[f]} is a fruit pie!`);
            }
        }
    }
}

function Gold() {
    let fruits = ['apple', 'blueberry', 'peach', 'cherry', 'key lime'];
    let fruitPies = [];
    for (fruit of fruits) {
        for (pie of pies) {
            if (fruit == pie) {
                fruitPies.push(fruit);
            }
        }
    }
    console.log(fruitPies);
}

function Platinum(pies) {
    let fruits = ['apple', 'blueberry', 'peach', 'cherry', 'key lime'];
    let fruitPies = [];
    for (fruit of fruits) {
        for (pie of pies) {
            if (fruit == pie) {
                fruitPies.push(fruit);
            }
        }
    }
    console.log(fruitPies);
}