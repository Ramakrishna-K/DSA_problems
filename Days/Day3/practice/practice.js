// // Practice Questions
// // Easy
// // Print all elements of an array.
// let arr = [10,20,30,40,50,60];

// for(let i =  0; i < arr.length; i++){
//     console.log(arr[i])
// }

// Find the sum of all elements.
// let arr = [20,30,40,50,60,70];
// let sum = 0

// for(let i =0; i < arr.length;i++){
//     sum = arr[i];

// }
// console.log(sum);

// // Find the maximum element.
// let array = [2,30,40,50,4,37,80,90,30];

// let max = array[0];

// for(let i = 1; i < array.length; i++){
//     if(array[i] > max){
//         max = array[i]
//     }
// }
// console.log(max)

// // methods in maximum
let array1 = [2,30,40,50,4,37,80,90,30];
let max = Math.max(...array);
console.log(max) 



// // Find the minimum element.
// let arr2 = [2,30,40,50,4,37,80,90,30];

// let min = arr2[0];

// for(let i = 1; i < arr2.length; i++){
//     if(arr2[i] < min){
//         min = arr2[i]
//     }
// }
// console.log(min)

// // methods in maximum
// let arr2 = [2,30,40,50,4,37,80,90,30];
// let min = Math.min(...arr2);
// console.log(min) 
// // Reverse an array.
// let arr = [1,2,3,4,5];

// // let reverse = arr.reverse()
// // console.log(reverse)

// console.log(arr.reverse())

// // Medium
// // Insert an element at a given position.
// let arrk = [20,40,8,7,8,9,10]
// arrk.splice(0,0,6)
// console.log(arrk)
// // Delete an element from a given position.
// let arr = [1,2,3,4,5];
// arr.splice(1,1);
// console.log(arr)


// // Count even and odd numbers.
// let arr = [20,4,5,6,7,8,9,30,35]
// let even = 0;
// let odd = 0;

// for (let i = 0; i< arr.length; i++){
//     if(arr[i] % 2 == 0){
//         even++
//     }else{
//         odd++
//     }
// }
// console.log(even);
// console.log(odd);
// // ternary operator using
// let arr = [20,4,5,6,7,8,9,30,35]
// let even = 0;
// let odd = 0;

// for (let i = 0; i< arr.length; i++){
//     arr[i] % 2 == 0 ? even++ : odd++

// }
// console.log(even);
// console.log(odd);
// Find the second largest element.


// Check if an array is sorted.

// Challenge
// Reverse an array without using reverse().
// Remove duplicate elements from an array.
// Rotate array by one position.
// Move all zeros to the end.
// Find missing number in an array.