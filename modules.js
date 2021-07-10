//lets learn about named, export and import
//to import any value from a module 
import * as Math from './maths';
import Animal from './animal';
import { log } from 'console';

console.log(Math.add(2, 2));
console.log(Math.divide(8, 3));
console.log(Math.multiply(4, 5));
console.log(Math.subtraction(45, 89));
console.log(Math.PI);

var animal = new Animal();
console.log(animal.getClassType());

//template literals
//using elegant syntax when string is to be concatenated example
const name = 'anna';
const country = 'canada';
const age = 23;
const black = false;
console.log(`Name ${name} Country ${country} Age ${age} Black ${black} `);
//perform javascript operation 
console.log(`Name ${name.length} Country ${country.toLowerCase()} Age ${age} Black ${black} `);

//arrays and spread operators
const arrayOne = ['maean', 'amma', 'alex'];
const arrayTwo = ['mkee', 'saeed', 'ismail'];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach((name) => {
    console.log(name);
});
// we can also take a string;
const name = 'mariam';
const nameToArray = [...name];
nameToArray.forEach((letter) => {
    console.log(letter);
});


const addNumbers = (a, b, c) => {
    return a + b + c;
}

const numbers = [9, 8, 6];
const addition = addNumbers(...numbers);
console.log(addition);

//spread operators with object
//you often see this with react js applications
const addressn = {
    city: 'LA',
    country: 'USA',
    postcode: 'LA44'
}

const name = {
    firstName: 'Abba',
    lastName: 'Abba s'
}

const person = { ...addressn, ...name };
console.log(JSON.stringify(person, null, 2));

//arroe function 
const hello = () => {
    const es6 = 'ES6';
    return `HEllo ${es6}`
}
console.log(hello);

const powers = [2, 3, 4, 5, 6].map((number, index) =>
    Math.pow(number, index)
);
console.log(powers);

//lexical and this
//lets create an object
const persons = {
    name: 'alexa',
    cars: ['ferrari', 'lambo'],
    toString: () => {
        // console.log(`${this.name} has ${this.cars}`);
        //store the reference of this keyword
        const that = this;
        this.cars.forEach((car) => {
            console.log(`${that.name} has ${car}`);
        });
    }
}

person.toString();
//the above is ugly code but we are learning
//the easiest way to fix all of this is
const personal = {
    name4: 'alexa',
    cars: ['ferrari', 'lambo'],
    toString: function () {
        // console.log(`${this.name} has ${this.cars}`);
        //store the reference of this keyword
        this.cars.forEach((car) => {
            console.log(`${this.name4} has ${car}`);
        });
    }
}

personal.toString();

//enhanced object properties we have a new syntax for working with objects

const pricePropertyName = 'PRICE';

const calculator = (name, price) => {
    return {
     name,
     add(n2, n3){
         return n2+n3;
     },
     [pricePropertyName.toLowerCase()] : price
    }
}

const calc = calculator('casio', 99.90);
console.log(calc.name);
console.log(calc.add(34,56));
console.log(calc.price);

//array destructuring allows us to pull values from an array


