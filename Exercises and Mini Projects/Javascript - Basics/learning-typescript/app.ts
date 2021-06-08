// const add = (n1: number, n2: number) => {
//     return n1 + n2;
// }
 
// const number1 = 5;
// const number2 = 6;

// const result = add (number1, number2);

// console.log(result)



//For javascript objects like the one below, we can add the typescript notation :{} to enter the key-type pair (not key-value)
//This is NOT good practice. TypeScript already inferred the type, no need to redundantly use the : {} notation to specify the data-types.
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
// } = {
//     name: 'Bob',
//     age: 25,
//     hobbies: ['Sports', 'Cooking']
// }

// console.log(person);

//If you want to have a mixed array like ['Sports', 5] then you need a mixed array, though it is not recommended.
//This is any[]

// for (const hobby of person.hobbies) {
//     console.log(hobby)
// }

// enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' };