JavaScript is dynamically typed. A variable can change type during runtime, hence an error may only show up during runtime which would be disastrous in a production environment. 
TypeScript is statically typed. We define the types during development hence we can catch errors during development.

In TypeScript, all numbers are considered floats by default, no difference between 5 and 5.0.

Data Types in .ts:
- number
- boolean
- string
- object
- array

- tuple (used when you want a stricter version of array and you know the data types)
- enum (this only exists in typescript not jaavascript)


Type Infereance is built into TypeScript:
For example if you have a constant like "const number1 = 5;" typescript will automatically know/infer that this constant is a number simply because you passed it a 5.
Likwwise, if you have a constant like "const isTall = true;" then typescript will automatically know/infer that isTall is of type boolean simple because you assigned true to the constant.


BAD PRACTICE:
It is redundant to specify the data type of a constant if you initialzied it, example:
const number1: number = 5;

However, it is GOOD practice to assign a data type, if a constant have only been declared but NOT initialized, example:
const number1: number;


Using == as a comparater allows Javascript to do type conversion
but
using === is a stricter form of comparison that does NOT allow conversion



Union types, when an argument is declared with two types. Either input1 is a string or a number


