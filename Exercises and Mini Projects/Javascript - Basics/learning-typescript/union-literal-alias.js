"use strict";
//UNION TYPES and LITERAL TYPES
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineTexts = combine('max', 'weddy', "as-text");
const combineNumbers = combine(5, 6, "as-number");
const combineTextThatAreActuallyNumbers = combine('5', '5', "as-number");
console.log(combineTexts);
console.log(combineNumbers);
console.log(combineTextThatAreActuallyNumbers);
