// 5. Higher-Order Function:
//    Problem: Write a higher-order function that takes an array of numbers and a callback function as arguments. The function should apply the callback function to each element in the array and return a new array with the transformed values.

/*
function square(val) {
    return val * val;
}

function map(arr, callback) {
    let newArr = [];    // create a new array
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i])); // push the callback function into the new array
    }
    return newArr;  // return the new array
}

var size = prompt("Enter the size of the array: ");
var arr = [];

for (let i = 0; i < size; i++) {
    var num = prompt("Enter the element " + (i + 1) + ": ");
    arr[i] = parseInt(num); // convert string to integer
}

console.log("Original Array: " + arr);
console.log("Square of the elements: " + map(arr, square));

*/

// function generatePassword(length) {
//     const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()<>,.?/[]{}-=_+|';
//     let password = '';

//     for(let i = 0; i < length; i++) {
//         // generate a random number between 0 and the length of the charset
//         let at = Math.floor(Math.random() * (charset.length + 1));
//         password += charset.charAt(at);
//     }
//     return password;
// }

// // console.log(generatePassword(16));

// function getRandomElement(dataType) {
//     switch(dataType) {
//         case 'number':
//             return Math.floor(Math.random() * 100);
//         case 'string':
//             return Math.random().toString(36).substring(7);
//         case 'boolean':
//             return Math.random() < 0.5;
//         case 'object':
//             return { id: Math.floor(Math.random() * 1000), name: 'Object' };
//         case 'array':
//             return [1, 2, 3, 4, 5];
//         case 'null':
//             return null;
//         case 'undefined':
//             return undefined;
//         case 'symbol':
//             return Symbol('symbol');
//         default:
//             return '';
//     }
// }

// function generateRandomArray(size) {
//     const dataTypes = ['number', 'string', 'boolean', 'object', 'array', 'null', 'undefined', 'symbol'];
//     const randomArray = [];

//     for(let i = 0; i < size; i++) {
//         randomArray.push(getRandomElement(dataTypes[Math.floor(Math.random() * dataTypes.length)]));
//     }
//     return randomArray;
// }

// const randomArray = generateRandomArray(10);

// // console.log(randomArray);

// for(const element of randomArray) {
//     console.log(element,  '->' , typeof element);
// }


function substrings(str1) {
    var count = 0;
    var array1 = [];
    for (var x = 0,  y = 1; x < str1.length; x++, y++) {
        array1[x] = str1.substring(x, y);
    }
    // console.log(array1.join("\n"));

    var combi = [];
    var temp = "";
    var slent = Math.pow(2, array1.length);
    
    for(var i = 0; i < slent; i++) {
        temp = "";
        for(var j = 0; j < array1.length; j++) {
            // & is bitwise AND
            if((i & Math.pow(2, j))) {
                temp += array1[j];
            }
            console.log(i, j, temp);
            count += 1;
        }

        if(temp !== "") {
            combi.push(temp);
        }
        // count += 1;
    }
    // combi.join is used here to join the elements of the array with a new line character
    // console.log(combi.join("\n"));
    console.log("Total number of substrings: " + count);
}

substrings("elephant");

/*
(i & Math.pow(2, j)) is used to check whether the jth bit in the binary representation of i is set or not. in simple words, it checks whether the jth element of the array is present in the subset or not. if present, then it is added to the subset represented by temp.
*/