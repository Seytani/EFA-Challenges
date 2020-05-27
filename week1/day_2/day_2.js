// 05/21/20 Challenge

let fb = 30;
if (fb % 3 == 0 && fb % 5 == 0) {
    console.log("Fizz Buzz");
}
else if (fb % 3 == 0) {
    console.log("Fizz");
}
else if (fb % 5 == 0) {
    console.log("Buzz");
}
else {
    console.log(fb);
}

fb = 4;
(fb % 3 == 0 && fb % 5 == 0) ?
    console.log("Fizz Buzz") : (fb % 3 == 0)   ?
    console.log("Fizz")      : (fb % 5 == 0)   ?
    console.log("Buzz")      : console.log(fb);


fb = 10;
switch (true) {
    case (fb % 3 == 0 && fb % 5 == 0):
        console.log("Fizz Buzz");
        break;
    case (fb % 3 == 0):
        console.log("Fizz")
        break;
    case (fb % 5 == 0):
        console.log("Buzz");
        break;
    default:
        console.log(fb);
}

