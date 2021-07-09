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
    number += 7;
}
// do while loop
var i = 6;
do {
    i++
} while (i <= 9);
console.log(i);
//do while allows you to perform a statement at least once 
//whereas in while statement if it a false it never runs

//break and continue keywords which can only be used within loops

var number = 0;
while (number < 5) {
    console.log(number);
    if (number == 2) {
        break;// u can use continue here
    }
    number++;
}
//if statements allows us execute block of statements if condition is true
var bool = true;
if (bool) {
    console.log("hello");
} else {
    console.log("hi");
}
//another example
var self = {
    age: 79,
    clob: "SE3"
}
if (self.age > 23) {
    console.log(self.clob);
} else if (self.age >= 87) {
    console.log('man u old');
}
else {
    console.log('nothing is impossible');
}
//switch statements: when we have more than one case of if else

switch (self.age) {
    case (person.age == 45):
        console.log('you are an adault');
        break;

    case (person.age == 85):
        console.log('you old man');
        break;

    case (person.age == 234):
        console.log('you are out');
        break;
    default:
        console.log('we dont know');
}
//another example
switch (new Date().getDay) {
    case 6:
        console.log('saturday of the week');
        break;

    default:
        console.log('i dont know');
}
//comparison and logical operators 
console.log(20 == 20);
console.log(20 < 20);
console.log(20 <= 20);
console.log(20 > 20);
console.log(20 >= 20);

//logical operators
console.log(20 == 20 && 30 == 30);
//logical && means everything has to be true
console.log(20 == 20 || 30 == 30);
// logical or || means one statement has to be true
//we use the comparison and logical operators in if statements

//type coercion is the process of converting a value from one type to anoher
console.log(typeof 0 + " " + typeof false);
console.log(0 == false); //false is being converted to zero

console.log(typeof "0" + " " + typeof false);
console.log("0" == false);

console.log(typeof 2 + " " + typeof "2");
console.log("2" == 2);

// use the strict equality === to prevent type coercion
console.log(typeof 0 + " " + typeof false);
console.log(0 === false); //false is being converted to zero

console.log(typeof "0" + " " + typeof false);
console.log("0" === false);

console.log(typeof 2 + " " + typeof "2");
console.log("2" === 2);

//map, filter and reduce
//map when working with arrays
//map simply means transform which means the function 
//in the map will be executed for every single element in an array
var mep = [2, 3, 4, 5, 6, 7].map((n) => {
    return n * 4;
});
console.log(mep);

//filter simply allows us to filter values of an array
//returns a boolean
var mip = [2, 3, 4, 5, 6, 7].filter((n) => {
    return n % 2 == 0;
});
console.log(mip);

//reduce allows the reduction of all the values inside of an array
//into one single value
var myp = [2, 3, 4, 5, 6, 7].reduce((accumulator, current) => {
    return accumulator + current
})
console.log(myp);









































