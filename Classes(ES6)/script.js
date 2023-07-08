class Calculator {
    constructor(a, b) {
        this.a = a+0;
        this.b = b+0;
    }

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a - this.b;
    }

    multiply() {
        return this.a * this.b;
    }

    divide() {
        return this.a / this.b;
    }

    remainder() {
        return this.a % this.b;
    }

    power() {
        return this.a ** this.b;
    }

    squareRoot() {
        return Math.sqrt(this.a);
    }

    cubeRoot() {
        return Math.cbrt(this.a);
    }
}

class Test_Class extends Calculator {
    a = prompt("Enter a number: ");
    b = prompt("Enter another number: ");

    constructor(a, b) {
        super(a, b);
    }

    add() {
        return super.add();
    } 

    subtract() {
        return super.subtract();
    }

}

// const Calc = new Calculator(2, 3);


// console.log("a: " + Calc.a);
// console.log("b: " + Calc.b);
// console.log("Add: " + Calc.add());
// console.log("Subtract: " + Calc.subtract());
// console.log("Multiply: " + Calc.multiply());
// console.log("Divide: " + Calc.divide());
// console.log("Remainder: " + Calc.remainder());
// console.log("Power: " + Calc.power());
// console.log("Square Root: " + Calc.squareRoot());
// console.log("Cube Root: " + Calc.cubeRoot());

// const Calc2 = new Calculator(4, 9);

// console.log("a: " + Calc2.a);
// console.log("b: " + Calc2.b);
// console.log("Add: " + Calc2.add());
// console.log("Subtract: " + Calc2.subtract());
// console.log("Multiply: " + Calc2.multiply());
// console.log("Divide: " + Calc2.divide());
// console.log("Remainder: " + Calc2.remainder());
// console.log("Power: " + Calc2.power());
// console.log("Square Root: " + Calc2.squareRoot());
// console.log("Cube Root: " + Calc2.cubeRoot());  

// const Test_Class1 = new Test_Class(2, 3);

// console.log("a: " + Test_Class1.a);
// console.log("b: " + Test_Class1.b);
// console.log("Add: " + Test_Class1.add());
// console.log("Subtract: " + Test_Class1.subtract());

// console.log("Add: " + Test_Class1.add(1, 2, 3));



//hoisting - using a variable or function before it is declared

// means function declaration can be called before it is declared but function expression cannot be called before it is declared

// function declaration is hoisted
// fun();  //function call

// function fun() {    //function declaration
//     console.log("Hello from fun");
// }

// function expression is not hoisted
// fun1(); //function call

// var fun1 = function() { //function expression
//     console.log("Hello from fun1");
// }

// carName = "Volvo";
// console.log(carName);
// var carName;



// static keyword
// class MathUtils {
//     static multiply(a, b) { //static is used to call the function without creating an object
//         return a * b;
//     }
// }

// console.log("MathUtils.multiply(2, 3)", MathUtils.multiply(2, 3));


//getter and setter

class Circle {
    constructor (radius) {
        this.radius = radius;
    }

    get diameter() {
        return 2 * this.radius;
    }

    set diameter(value) {
        this.radius = value / 2;
    }
}

const circle = new Circle(5);

console.log("circle.radius: ", circle.radius);
console.log("circle.diameter: ", circle.diameter);

circle.diameter = 100;  //setter

console.log("circle.radius: ", circle.radius);
console.log("circle.diameter: ", circle.diameter);  //getter

// in javascript getter and setter methods can be resued as properties
// js engine will automatically call the getter and setter methods when we try to access the properties

// scope of let variable is within the block({}) - act as private variable
// scope of var variable is within the function - act as public variable
// scope of const variable is within the block({}) - act as private variable

// let _a;  //private property - convention