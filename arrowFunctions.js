/*
- Also called Fat Arrow Functions
-They are NOT declarations (NOT declarative Functions)
- Do NOT get hoisted
- Two Types
    - Concise Body --> Return is automatic
    - Block Body --> Return is NOT automatic
- a concise way to write function expressions
*/

// CONCISE BODY
//speak(`dog`); // error (hoisting doesn't work)
let speak = (name) => console.log(`The ${name} goes woof!`);
speak(`dog`); //The dog goes woof!

let br = '---------------------------'
console.log(br);

let firstName = "Peter";
let lastName = "Parker";

let concatName = (first, last) => `${first} ${last}`;
let fullName = concatName(firstName, lastName);
console.log(fullName);

console.log(br)

// BLOCK BODY
// Use {curly brackets to contain the logic}
let speakAgain = name => {
    console.log(`The ${name} goes woof (again)!`);
}

speakAgain('dog');

let concat = (first, last) => {
    return `${first} ${last}`
}

let newFullName = concat(firstName, lastName);

console.log(newFullName);

console.log(br);

let x = 27;
let y = 47;

let sum = (num1, num2) => {
    return num1 + num2
}

let returnedValue = sum(x, y);
console.log(returnedValue);