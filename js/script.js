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
*/
//Practice with Functions - 4
function findModulus(num1, num2) {
    "use strict";
    var numOut = num2 % num1;
    window.console.log(numOut + " is the modulus of " + num1 + " and " + num2 + ".");
    return numOut;
}
findModulus(6, 10);