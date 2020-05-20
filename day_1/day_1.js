//Challenge 1

let myName = 'Jess';
let friendName = 'Nary';
let difference;

if (myName.length == 0 || friendName.length == 0) {
    console.log('Cannot determine which name is longer becasue one or both names are missing!');
} else if (myName.length == friendName.length) {
    console.log(`My name is ${myName} and it has ${myName.length} letters as well. My friend's name is ${friendName} and it has ${friendName.length} letters. It seems our names are the same length!`);
} else if (myName.length < friendName.length) {
    difference = friendName.length - myName.length;
    console.log(`My friend's name is ${friendName} and it has ${friendName.length} letters. It is longer than my name by ${difference} letters.`);
} else if (myName.length > friendName.length) {
    difference = myName.length - friendName.length;
    console.log(`My name is ${myName} and it has ${myName.length} letters. It is longer than my friend's name which is ${friendName}, by ${difference} letters.`);
}

//Challenge 2
let obj = {str: 'Hello', num: 8, bool: true, obj2: {color: 'red', size: 3}, arr: [1,2,3], func: ()=>{return true}};
console.log(typeof obj.func);

if(typeof obj.func === 'string') {
    console.log('you are okay');
} else if (typeof obj.func === 'number') {
    console.log('you are okay');
} else if (typeof obj.func === 'boolean') {
console.log('you are okay');
} else if (typeof obj.func === 'object') {
    console.log('you are okay');
} else {
    console.log('What are you?');}

(typeof obj.func === 'string')  ? console.log('You are a String')  : 
(typeof obj.func === 'number')  ? console.log('You are a Number')  : 
(typeof obj.func === 'boolean') ? console.log('You are a Boolean') : 
(typeof obj.func === 'object')  ? console.log('You are an Object') : console.log('What are you?');