//lets learn about named, export and import
//to import any value from a module 
import * as Math from './maths';
import Animal from './animal';

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

concatArray.forEach((name)=>{
console.log(name);
});
// we can also take a string;
const name = 'mariam';
const nameToArray = [...name];
nameToArray.forEach((letter)=>{
    console.log(letter);
});
















