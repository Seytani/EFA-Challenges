//5/21/20 Extra challenges 


/***** Challenge 1 *****/
let time = 2;
let space = 8;

if(space % time == 0) {
        console.log(`value of ${time} is divisble by value of ${space}`);
    } else {
            console.log(`The remainder is ${time % space}`);
        }
        
        (space % time == 0) ? console.log(`value of ${time} is divisble by value of ${space}`):
        console.log(`The remainder is ${time % space}`);
        
        switch(true) {
                case (space % time == 0):
                    console.log(`value of ${time} is divisble by value of ${space}`);
                    break;
                default:
                    console.log(`The remainder is ${time % space}`);
            }
            
            
/***** Challenge 2 *****/

let string = 'te amo mucho nary';
if(string.length == 0) {
    console.log('Please type something');
} else if(string.length > 10) {
    console.log('Please type less');
} else {
    console.log(string);
}