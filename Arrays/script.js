//Multidimensional Arrays

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


//accessing the elements
console.log(matrix[2][1]); // 1

//delete an element
delete matrix[2][1];

console.log(matrix[2][1]); // undefined
console.log(matrix[2]); // [7, 8, 9]

matrix[2][1] = +prompt("Enter a number: ", 0);

console.log(matrix[2][1]);


/*




*/