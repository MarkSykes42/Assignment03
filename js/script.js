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

//The Fortune Teller
function tellFortune(nChild, strPart, strLoc, strJob) {
    "use strict";
    window.console.log("You will be a " + strJob + " in " + strLoc + ", and married to " + strPart + " with " + nChild + " kids.");
}
tellFortune(3, "Astrid Numero", "Hollywood", "cook");
tellFortune(0, "May Bell", "space", "astronaut");
tellFortune(1, "Sandra Dee", "Anywhere", "realestate developer");


//The Rock, Paper, Scissors Game
//Part 1 - User Selection

var strSel;
do {
    //prompt the user for their choice
    strSel = prompt("Enter rock, paper, or scissors?");
} while (strSel !== "rock" && strSel !== "paper" && strSel !== "scissors");

//Part 2 - Computer's choice
//there will be 3 options
var numOpponent = Math.floor(Math.random() * 3) + 1;
var strOpponent;
switch(numOpponent) {
  case 1:
    strOpponent = "rock";
    break;
  case 2:
    strOpponent = "paper";
    break;
  case 3:
    strOpponent = "scissors";
    break;
  default:
    window.console.log("Big boo-boo in switch statement");
}

//Part 3 - Determination
//
var strOutcome = "DRAW";  //pretend it's a match until proven otherwise
if (strSel === "rock") {
    if (strOpponent === "scissors") {
        strOutcome = "WIN";
    } else if (strOpponent === "paper") {
        strOutcome = "LOSE";
    }
} else if (strSel === "paper") {
    if (strOpponent === "rock") {
        strOutcome = "WIN";
    } else if (strOpponent === "scissors") {
        strOutcome = "LOSE";
    }
} else if (strSel === "scissors") {
    if (strOpponent === "paper") {
        strOutcome = "WIN";
    } else if (strOpponent === "rock") {
        strOutcome === "LOSE";
    }
}
window.alert(strOutcome + "! You chose " + strSel + " and your opponent chose " + strOpponent);
*/
//The Basic Calculator
var num1;
var num2;
var strOper;
// Math Function
function mathStuff(numA, numB, mathAct) {
    "use strict";
    switch(mathAct) {
        case "add":
            return (numA + numB);
            break;
        case "multiply":
            return (numA * numB);
            break;
        case "subtract":
            return (numA - numB);
            break;
        case "divide":
            return (numA / numB);
            break;
        default:
            window.console.log("Invalid math action requested: " + mathAct);
    }
}
//Main Logic
do {
    do {
        num1 = parseFloat(window.prompt("Enter your first number"), 10);
    } while (num1 === NaN);

    do {
        num2 = parseFloat(window.prompt("Enter your second number"), 10);
    } while (num2 === NaN);
    strOper = window.prompt("Enter either add, subtract, multiply, or divide");
} while (strOper !== "add" && strOper !== "subtract" && strOper !== "multiply" && strOper !== "divide");

window.alert("Your answer is " + mathStuff(num1, num2, strOper));
