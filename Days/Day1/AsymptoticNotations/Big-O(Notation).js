// let numbers = [10, 20, 30, 40, 50];

// function findNumber(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(findNumber(numbers, 50));

// same code but small code 

function findNumber(arr, target){
    return arr.indexOf(target);
}
console.log(findNumber([10, 20, 30, 40, 50], 50);
