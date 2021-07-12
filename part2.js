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
    logAgeFronDog(){
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
    logAgeFronDog(){
        super.wakingUp();
    }
}
const josh = new Cat('mike', 5, 'cat');
josh.logBreed();
josh.eat();
josh.sleep();