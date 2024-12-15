// ============ Object ===========
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    displayInfo: function () {
        console.log(`${this.brand} ${this.model}, ${this.year}`);
    }
};
//   car.displayInfo(); // Toyota Corolla, 2020



// ================ Class ====================
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`${this.brand} ${this.model}, ${this.year}`);
    }
}

let myCar = new Car("Honda", "Civic", 2022);
// myCar.displayInfo(); // Honda Civic, 2022


// ================ Inheritance ====================
class ElectricCar extends Car {
    constructor(brand, model, year, batteryCapacity) {
        super(brand, model, year); // paasing the value to parent car Class
        this.batteryCapacity = batteryCapacity;
    }

    displayInfo() {
        super.displayInfo(); // Call the parent method
        console.log(`Battery Capacity: ${this.batteryCapacity} kWh`);
    }
}

let myElectricCar = new ElectricCar("Tesla", "Model 3", 2023, 75);
// myElectricCar.displayInfo();



// ================ Encapsulation ====================
class Parent {
    #name;
    #email 

    constructor(name, age) {
        this.#name = name;
        this.age = age;
        this.#email= "dpksaini49";
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        if (newName.length > 2) {
            this.#name = newName;
        } else {
            console.log('Name must be longer than 2 characters.');
        }
    }


    displayInfo() {
        console.log(`Name: ${this.#name}, Email: ${this.#email}, Age: ${this.age}`);
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name, age);
        this.displayInfo();
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Email: ${this.email}, Age: ${this.age}`);
    }
}

const parent = new Parent('Alice', 30);
// parent.displayInfo();
// parent.name = 'Bob';
// parent.displayInfo();
// parent.name = 'A';


const child = new Child('July', 20);
child.displayInfo();




// ================ Polymorphism ====================
class Animal {
    speak() {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog barks');
    }
}

class Cat extends Animal {
    speak() {
        console.log('Cat meows');
    }
}

const animals = [new Dog(), new Cat(), new Animal()];

// animals.forEach(animal => {
//     animal.speak();  // Demonstrates polymorphism
// });



// ================ Abstraction ====================
class Shape {
    constructor(name) {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.name = name;
    }

    // Abstract method
    calculateArea() {
        throw new Error("Method 'calculateArea()' must be implemented.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }

    // Implementing the abstract method
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape {
    constructor(side) {
        super('Square');
        this.side = side;
    }

    // Implementing the abstract method
    calculateArea() {
        return this.side * this.side;
    }
}

const circle = new Circle(5);
// console.log(`Area of the circle: ${circle.calculateArea()}`);

const square = new Square(4);
// console.log(`Area of the square: ${square.calculateArea()}`);
