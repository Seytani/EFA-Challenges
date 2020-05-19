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