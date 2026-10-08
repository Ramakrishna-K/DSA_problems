
// Basic code 
let arr1 = [10, 20, 30, 40, 50];

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// Insert at End
let arre = [1,2,3,4,5];
arre.push(8);
console.log(arre)

// Insert at Beginning
let arr2 = [10, 20, 30];

arr2.unshift(5);

console.log(arr2);

// Insert at Specific Position

let arr = [10, 20, 40];

arr.splice(2, 0, 30);

console.log(arr);

// splice(index, deleteCount, value)