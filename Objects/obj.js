const person = {
    name: 'Mosh',
    age: 30,
    city: 'Toronto'
};

//Accessing object properties
console.log(person.name);
console.log(person['name']);

//Adding properties
person['name'] = 'John';
console.log(person.name);

//Arrays
const selectedColors = ['red', 'blue'];

person.favoriteColor = selectedColors;

console.log("Favorite Colors: " + person.favoriteColor);


const car = {
    make: 'Honda',
    model: 'Civic',
    year: 2018,
    color: 'Black',
    price: 20000,
    isAvailable: true,

    drive: function() {
        console.log('vroom vroom');
    },

    start: function() {
        console.log('starting the car');
    },

    stop: function() {
        console.log('stopping the car');
    }
};

car.start();
car.drive();
console.log(car.make, car.model, car.year, car.color, car.price, car.isAvailable);
car.stop();


function Cakes(name, price, flavor, layers, occasion) {
    this.name = name;
    this.price = price;
    this.flavor = flavor;
    this.layers = layers;
    this.occasion = occasion;
}

const orderCake = new Cakes('Chocolate Cake', 100, 'Chocolate', 3, 'Birthday');

console.log(orderCake);

//Destructuring Objects
const { name, price, flavor, layers, occasion } = orderCake;
console.log(name, price, flavor, layers, occasion);

console.log('------------------------------------');

//JSON.stringify() - converts an object to a JSON string

const carJson = JSON.stringify(car);
console.log(carJson);

const personJson = JSON.stringify(person);
console.log(personJson);

//JSON.parse() - converts a JSON string to an object

const carObj = JSON.parse(carJson);
console.log(carObj);

// assign method
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);

//Object.create() - creates a new object with the specified prototype object and properties

const person1 = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person1);

me.name = 'Matthew';
me.isHuman = true;
me.printIntroduction();

//Object.defineProperty() - adds the named property described by a given descriptor to an object

const object1 = {};

Object.defineProperty(object1, 'property1', {
    value: 42,
    writable: false
});

object1.property1 = 77;
console.log(object1.property1);