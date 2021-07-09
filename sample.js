const { log } = require("console");

//they can store data types
var name = "mo musa";
//var is a keyword and inside is the place holder
var age = 23;
var hasMoney = Boolean; //true or false
var empty = undefined;
var semiour = {
    name: 'nure',
    id: 4,
    tall: false
}
console.log(name);
console.log(age);
console.log(empty);
console.log(semiour);
console.log(hasMoney);// native code
//to access an object
console.log(semiour.name);
//or
console.log(Object.values(semiour));
//object within an object
var semiour = {
    name: 'nure',
    id: 4,
    tall: false,
    address: {
        firstline: "234",
        postcode: "SE3",
        country: "england"
    }
}
console.log(JSON.stringify(semiour));
//to grab the address use
console.log(JSON.stringify(semiour.address));
//to access a property of address use
console.log(JSON.stringify(semiour.address.firstline));

//Arrays allows you to store multiple values like storing a bunch of toys in a box
var name = "Alex";
var names = ["alex", "maria", "tunde"];
// to access them 
log(names[2]);
//make sure your position is not bigger than the number of items inside the array
//to get the size
log(names.length);
//look through the array elements or loopin an array
//the simplest method is
for (let n of names) {
    log(n);
}
// you can also loop through an array using
names.forEach((n, index) => {
    log(index + '' + n)
});
//arithmetic operations in js
//+ - * / %
var addition = 2 + 2;
var subtraction = 3 - 3;
var divison = 7 / 6;
var multiplication = 9 * 8;
var remainder = 6 % 4;
log(addition);
log(multiplication);
log(divison);
log(subtraction);
log(remainder);

//functions
//a function is a javascript proceedure that allows the performance of task or calculating a value
function add(a, b) {
    var result = a + b;
    return result;
}
var result = add(99, 8);
console.log(result);
//functions are the core of any application. you can use it to solve problems
//some javascript built in functions are
console.log(Object.keys(names));
console.log(Object.values(names));
//checkout underscore.js
//loops. the traditional way of looping injs is
for (var i = 0; i < 4; i++) {
    console.log(i);
}
//example usage
var person = [
    {
        name: 'nure',
        id: 4,
        tall: false,
        address: {
            firstline: "234",
            postcode: "SE3",
            country: "england"
        }
    },
    {
        name: 'nure',
        id: 4,
        tall: false,
        address: {
            firstline: "234",
            postcode: "SE3",
            country: "england"
        },
    }
];
for (var i = 0; i <= person.length; i++) {
    console.log(person[i].name);
    console.log(person[i].address);
    console.log(person[i].tall);
}
//while loop works on a boolean case
var number = 5;
while (number < 20) {
    console.log(number);
    number +=7;
}
// do while loop
var i = 6;
do {
    i++
} while (i<=9);
console.log(i);












