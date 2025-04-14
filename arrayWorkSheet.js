//Part 1
let fruits = ["apple", "banana","cherry"];
//value at index 1 of the fruits array
console.log("The Value at index 1 of the fruits array is  " + fruits[1]);

for (let i = 0; i < fruits.length; i++) {
    console.log("The content of the array is " + fruits[i]);
}
// total number of items in the fruits array
console.log("The total number of items in the fruits array is " + fruits.length);

//Part 2 Using push
fruits.push("orange");
console.log("The added fruit is " + fruits);

//Using pop
const poppedFruits = fruits.pop()
console.log(`The removed fruit is  ${poppedFruits}`);

fruits.push("kiwi", "cantalope");
console.log(fruits);
console.log("The length after added is " + fruits.length);

fruits.pop()
console.log(fruits);
console.log("The length after removed  is " + fruits.length);

//Part 3
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Part 3b change to Uppercase
for (let j = 0; j < fruits.length; j++) {
    console.log(fruits[j].toUpperCase());
}

fruits.push("Pomegranate", "grapes");
console.log(fruits);

for (let j = 0; j < fruits.length; j++) {
    console.log(fruits[j]);
}

//Part 3C - counting Specific Items using function
function countFruits1(fruits) {
    let count = 0;
    for (let k = 0; k < fruits.length;) {
        if (fruits[k] !== fruits[k]) {
            count++;
        }
        return count;
    }
}
countFruits1(fruits);
console.log(countFruits1(fruits));

// counting specific items using for Loop
let countFruits = 0;
for (let j = 0; j < fruits.length; j++) {
    countFruits += Number (fruits[j].count);
}
console.log(countFruits);

//using filter() methods //Very Unclear
// const count = fruits.filter(fruit => fruits.includes(fruit));
//
// console.log(count);

//Part 4 - Hands-On Practice - ShoppingCart
let cart = [];
cart.push("cereal", "eggs", "fruits");
console.log(cart);

cart.pop();
console.log(`The list of items left in cart after it is removed are; ${cart}`);
console.log("The length of items left in the cart is " + cart.length);

//Part 4b - Reverse Order
const num = [1,2,3,4,5];
for (let i = 0; i < num.length; i++) {
    num.reverse(); //reverse but not in order.
    console.log(num[i]);
}

const num2 = [1,2,3,4,5];
const num3 = num2.reverse();
console.log(num3); //reverse in order.

//Part 5 -Conditional Statements with arrays
let array1 = ["a", "b", "c","d"];
let array2 = ["red", "green", "blue"];

if (array1.length > array2.length) {
    console.log("array1 has a greater length");
}else if (array2.length > array1.length) {
    console.log("array2 has a greater length");
}else {
    console.log("They have the same length");
}
// Or simpler
if (array1.length > array2.length) {
    console.log("array1 has a greater length");
}else {
    console.log("array2 has a greater length");
}

// Part 6 - Print Even indexed Elements
const array = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            console.log(array[i]);
        }
}


//Part 7 - Push Challenge:Nested Loops
const students = ["Alice", "Bob", "Charlie"];
const subjects = ["Math", "Science"];

for (let i = 0; i < students.length; i++) {
    //console.log(students[i]);
    for (let j = 0; j < subjects.length; j++) {
        //console.log(subjects[j]);
       console.log(students[i] + " - " , subjects[j]);
    }
}


