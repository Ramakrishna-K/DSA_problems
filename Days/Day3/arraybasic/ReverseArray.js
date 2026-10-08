// Method 1: Built-in Function


let arr1 = [1, 2, 3, 4, 5];

arr1.reverse();

console.log(arr1);

// Method 2: Two Pointer Technique
// let arr2 = [1, 2, 3, 4, 5];

// let start = 0;
// let end = arr2.length - 1;

// while (start < end) {
//     let temp = arr2[start];
//     arr2[start] = arr2[end];
//     arr2[end] = temp;

//     start++;
//     end--;
// }

// console.log(arr2);

// this code is the small way code 

// 1)
    let arr2 = [1, 2, 3, 4, 5];
let start = 0;
let end = arr2.length - 1;
while(start < end){
    [arr2[start], arr2[end]] = [arr2[end], arr2[start]];

    start ++ ;
    end --;
}
console.log(arr2)

// 2)
let arr3 = [1, 2, 3, 4, 5], start = 0, end = arr3.length - 1;

while(start < end){
    [arr3[start++], arr3[end--]] = [arr3[start], arr3[end]]
}
console.log(arr3)
