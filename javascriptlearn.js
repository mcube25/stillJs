// a var is a store where you can store values

const { memoryUsage } = require("process");

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

    }
}

function addTwenty(num) {
    var add = 20;
    return num + add;
}
console.log(add);
var globalVar = 'i am global';
function consult(str) {
    return str + ' ' + globalVar;
}
console.log(consult('i am hungry'));
if (true) {
    let x = 2;
}
console.log(x);