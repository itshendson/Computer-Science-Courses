"use strict";
// Function Type
// We've created a function and specified the required type for each of the parameters
// Notice that the third parameter is called cb (for callback)
// We've specified the type of the third parameter as a FUNCTION that takes in one parameter called result (which is of type number)
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
// After declaring the function, we can call it
// Note that for the third parameter, we have to comply with the typeof requirements we set in the function declaration
// This is useful when you know you'll have a function as a parameter
addAndHandle(10, 20, (result) => {
    console.log(result);
});
addAndHandle(50, 5, (result) => {
    console.log(result);
    return result; //This line will do NOTHING because in the function type, you've specified void as return type
});
/* ---------------------------- */
// UNKNOWN TYPE
// There is a data type called unknown type that allows the binding to be initialized to be any type.
let userInput;
let userName;
// Unknown is more restrictive than the any type
// Unknown forces you to check the data type of the binding
// Because it is more restrictive, unknown is better than the any type.
userInput = 5;
userInput = 'max';
if (typeof userInput === 'string') {
    userName = userInput;
}
