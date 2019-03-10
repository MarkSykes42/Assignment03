/*eslint-env browser*/
//Practice with Functions - 1
/*
function halfNumber(aNumArg) {
    "use strict";
    var numOut = aNumArg / 2;
    window.console.log("Half of " + aNumArg + " is " + numOut);
    return numOut;
}
halfNumber(77);

//Practice with Functions - 2
function squareNumber(aNum) {
    "use strict";
    var numOut = aNum * aNum;
    window.console.log("The result of squaring the number " + aNum + " is " + numOut);
    return numOut;
}
squareNumber(7.88);

//Practice with Functions - 3
function percentOf(nPercent, nOf) {
    "use strict";
    var numOut = (nPercent / nOf) * 100;
    window.console.log(nPercent +  " is " + numOut + "% of " + nOf + ".");
    return numOut;
}
percentOf(25, 200);

//Practice with Functions - 4
function findModulus(num1, num2) {
    "use strict";
    var numOut = num2 % num1;
    window.console.log(numOut + " is the modulus of " + num1 + " and " + num2 + ".");
    return numOut;
}
findModulus(6, 10);
*/
//Practice with Functions - 5
/*
Create a JavaScript function that accepts a certain amount of numbers as parameters. Those numbers should be collected using a prompt and the numbers should be delimited by commas. Once the values are collected, find the sum of all of the numbers combined. You will need to use a function, loop, arguments object, and several type conversion global functions to accomplish this task.



function findSum() {
    "use strict";
    var i;
    var sumIt = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sumIt = sumIt + arguments[i];
    }
    return sumIt;
}
window.console.log(findSum(1, 123, 500, 115, 44, 88));
*/
//The Fortune Teller
function tellFortune(nChild, strPart, strLoc, strJob) {
    "use strict";
    window.console.log("You will be a " + strJob + " in " + strLoc + ", and married to " + strPart + " with " + nChild + " kids.");
}
tellFortune(3, "Astrid Numero", "Hollywood", "cook");
tellFortune(0, "May Bell", "space", "astronaut");
tellFortune(1, "Sandra Dee", "Anywhere", "realestate developer");