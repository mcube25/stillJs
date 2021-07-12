const { error } = require("console");
const { resolve } = require("path/posix");

const calculatePay = (yearSalary, bonus = {
    teamBonus: 0,
    employeeBonus: 0
}) => {
    return yearSalary + bonus.teamBonus + bonus.employeeBonus;
}
console.log(calculatePay(29000, { teamBonus: 34000, employeeBonus: 9000 }));

//classes in a nutshell
// classes are blueprints in which we can define properties and behaviors properties and behaviours
//we can model real world examples based on classes
//wxamples are animals, humans, ball, shoe, anything really

//oop means object oriented programming which simply
// means the way we design programming is by constructing lots of classes and 
//from those classes that talk to each other

//creating classes
class Animal {
    constructor(name, age) {
        console.log(`this ${name} is ${age} and was created`);
        //constructor is a method that gets invoked any time you create an instance of the class created
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    wakingUp() {
        console.log(`${this.name} is waking up`);
    }
}
const booby = new Animal('nura', 2);
booby.eat();
booby.sleep();
booby.wakingUp()
//constructors only get invoked once but the methods within can created over again


//inheritance means we can have a common class
//and we can extend properties and behavior from those class

class Dog extends Animal {
    constructor(breed, name, age) {
        super(name, age)
        this.breed = breed;
    }
    logBreed() {
        console.log(`${this.name} is a ${this.breed} is a special one`);
    }
    logAgeFronDog() {
        super.wakingUp();
    }
}
const mike = new Dog('mike', 5, 'bulldog');
mike.logBreed();

class Cat extends Animal {
    constructor(breed, name, age) {
        super(name, age)
        this.breed = breed;
    }
    logBreed() {
        console.log(`${this.name} is a ${this.breed} is a special one`);
    }
    logAgeFronDog() {
        super.wakingUp();
    }
}
const josh = new Cat('mike', 5, 'cat');
josh.logBreed();
josh.eat();
josh.sleep();

//static methods
//the static keywords allows us to create methods and properties which belong to class
//and not each individual object that we instantiate

class Person {
    constructor(name, age) {
        console.log(`this ${name} is ${age} and was created`);
        //constructor is a method that gets invoked any time you create an instance of the class created
        this.name = name;
        this.age = age;
    }
    //go ahead and create a static method
    static iAmAStaticMethod() {
        console.log('i am a static method inside of a person class');
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
    wakingUp() {
        console.log(`${this.name} is waking up`);
    }
}
//to use our static method you don't need to create a new instance
//the static method is used when we dont want to create an instance of a method 
Person.iAmAStaticMethod();

const booby = new Person('nura', 2);

//promise is an object used for asynchronous computations
//it represents a value which maybe available now, or in the future or never

//lets say you perform a http request to a server
//and the server takes five seconds to process the request
//at the end we get a data or error

//we have three states in a promise
//pending: which is the initial state, not fulfilled or rejected
//fulfilled: meaning that the operation completed successfully
//rejected: meaning that the operation failed


//to use a promise we have to create a promise object and if its fulfilled 
//we use the .then method to pass a callback or any other computation method
//if the promise was rejected we use the .catch method

//creating promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('data back from the server');
    }, 3000);

    setTimeout(() => {
        reject('error');
    }, 2000);
});
//use a promise
promise.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});
//use promise.all

const namesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['anna', 'jones', 'ali', 'ikenna']);
    }, 3000);

    setTimeout(() => {
        reject('error');
    }, 2000);
});


const middleNamesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(['k', 'v', 'e', 'h']);
    }, 3000);

    setTimeout(() => {
        reject('error');
    }, 2000);
});

//we want to display the first and middlenames at once
Promise.all([namesPromise, middleNamesPromise]).then(data => {
    console.log(data);
    const [names, middlenames] = data;
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const middlename = middlenames[i];
        console.log(`${name} ${middlename}`);
    }
}).catch(error => {
    console.log(error);
});

//promises and fetch api
//use https://randomuser.me

//create a function that allows us get random user
const getRandomUser = n => {
    const fetchRandomUser = fetch(/*pass the url*/`https://randomuser.me/api/?results=${n}`);
    console.log(fetchRandomUser);
    fetchRandomUser.then(data => {
        console.log(data);
        data.json().then(randomUsers => {
            log(JSON.stringify(randomUsers.result.length));
            randomUsers.result.forEach(user => {
                const { gender, email } = user;
                log(`${gender} ${email}`)
            })
        })
    });
}

getRandomUser(23);

//Generators
// a generator is a function that can be paused
const getNumbers = function* (){
    yield 2;
    yield "hello";
    yield true;
    yield {name: 'alex'};
    return 'i am done'
}

const numbersGenerator = getNumbers();
console.log(numbersGenerator.next().value);

const getNumbers2 = function* (numbers){
for (let i = 0; i < numbers.length; i++) {
    yield numbers[i];
    
}
}

const numbersGen = getNumbers2([2,3,4,5,6,7,8]);

const interval = setInterval(()=>{
const next = numbersGen.next();
if (next.done) {
    console.log('this generator is done');
    clearInterval(interval);
}else{
    const number = next.value;
    console.log(number);
}
}, 2000);

