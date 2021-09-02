function smallbr() {
    console.log("-------------------")
}

function br() {
    console.log("======================================")
}

/*
example:
        let array = [value, value, value];
index position:        0,     1,     2
*/

let arr = ['first value', 'second value', 'third value'];
console.log(arr[0]); //first value
console.log(arr[1]); //second value
console.log(arr[2]); //third value

br();

// .length with an array:
console.log(arr.length); //3
console.log(arr[arr.length - 1]);

br();

// Using an array constructor, uses new keyword
let test = new Array();
console.log(test);
console.log(test.length);

// Created an empty array with 3 empty items
let test2 = new Array(3);
console.log(test2);
console.log(test2.length);

// We targeted a specific index/key, we "assigned" it a propper value
test2[0] = 'New Value';
console.log(test2);

br();

//Initializing an array values
let nums = Array(1, 2, 3, 4, 5);
console.log(nums);
//console.log(typeof nums);

let array2 = Array('array1', 'array2', 'array3 string');
console.log(array2[2]);

//       METHODS       //
// Methods are a way to pull out and/or manipulate the data within our arrays.

// forEach(), method runs a function over each index of our array
let boardGames = ['Scrabble', 'Chess', 'Monopoly', 'DnD', 'Clue'];

for (i = 0; i < boardGames.length; i++) {
    console.log(boardGames[i]);
};

smallbr();

// Concise Body Arrow Function
boardGames.forEach(game => console.log(`Concise: ${game}`));
// boardGames.forEach(game => console.log(typeof game));

smallbr();

// Block Body Arrow Function
boardGames.forEach(game =>{
    console.log(`Block: ${game}`);
});

// Anonymous Function
boardGames.forEach(function(game) {
    console.log(`Anon: ${game}`);
});

br();

// Various other methods:
//      Array.length -> returns the number of elements in the array
let shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.length);
// Array.push() -> adds an element to the end of the array
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
shoppingList.push('mint');
console.log(shoppingList);

// Array.pop() -> removes the last element of the array and returns that element
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
shoppingList.pop();
console.log(shoppingList)

// Array.unshift() -> adds a new element at the beginning of the array
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
shoppingList.unshift('salt');
console.log(shoppingList);

// Array.shift() -> removes the first element in the array, and returns the remainder elements
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
shoppingList.shift();
console.log(shoppingList);

// Array.map() -> transforms the elements in the original array by calling the given functino once for each element in the array
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.map(item => item.toUpperCase()));

// Array.filter() -> creates a new array with only the elements that pass the test in a given function
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.filter(item => item.startsWith('l')));

// Array.find -> return the FIRST element in the array that passes a test given as a function
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.find(item => item.startsWith('l')));

// Array.reduce() -> executes a given function for each value of the array and returns a single value
let costs = [2.00, 3.00, 4.00, 13.00];
console.log(costs.reduce((total, cost) => total + cost));

//Array.includes() -> determines wether an array has a specific element
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.includes('limes'));
console.log(shoppingList.includes('salt'));

// Array.indexOf() -> search the array for a specific element and returns it's first index. Returns -1 when element is not found.

shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.indexOf('limes'));
console.log(shoppingList.indexOf('Grape juice'));

// Array.findIndex() -> reurns the index of the first element in an array that passes the test given in a function
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.findIndex(item => item.startsWith('g')));

// Array.every() -> checks if all elements in an array pass a test given as a function. If there is 1 element that returns a false value, the function returns false and does not check the rest of the elements.
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.every(item => item.length > 7));

// Array.concast() -> merge two or more arrays, and returns a new array
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
let secondList = ['mint', 'salt', 'simple syrup'];
console.log(shoppingList.concat(secondList));

// Array.slice() -> selects a part of an array, and returns a new array. It selects the elements starting at the provided start argument, and ends at, but does *not* include, the provided end argument.
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.slice(1, 4));

// Array.splice() -> add/remove elements in an array and returns the new elements. First argument take in an integer that specifies at what index to add/remove elements. Second arguemnt takes in the number of items to be removed. Optional third argument takes in the new elements to be added to the array.
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
shoppingList.splice(2, 1);
console.log(shoppingList);
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
shoppingList.splice(2, 2);
console.log(shoppingList);

shoppingList.splice(2, 1, 'cherries')
console.log(shoppingList);

// Array.sort() -> sorts the items in ana array. The sort order can be either alphabetic or numeric, and with ascending or descending. By default, sort() orders the values as strings in alphabetical and accending order. Can take a in a compare function which indicates if you want to sort by ascending or descending order.
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.sort());

costs = [3, 2, 13, 4];
//want to sort by descending order
console.log(costs.sort((a, b) => b - a));

//want to sort by ascennding order
console.log(costs.sort((a,b) => a - b))

// Array.reverse() -> reverses the order of elements in an array
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.reverse());

// Array.toString() -> converts an array into a string
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.toString());

// Array.join() -> converts the elements of an array into a string. Can accept an optional parameter, "separator", which indicates how the elements will be separated. Default separator is a comma.
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
console.log(shoppingList.join("! and "));

// Lastly, an ES6 feature: the spread operator. The spread operator, is indicated by these 3 dots "..." expands the content of the array and takes it out of the array structure.
shoppingList = ['celery',  'limes', 'lemon slices', 'grenadine', 'oranges'];
console.log(...shoppingList);