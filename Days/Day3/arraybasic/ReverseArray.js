// Method 1: Built-in Function


let arr1 = [1, 2, 3, 4, 5];

arr1.reverse();

console.log(arr1);

// Method 2: Two Pointer Technique
let arr2 = [1, 2, 3, 4, 5];

let start = 0;
g

while (start < end) {
    let temp = arr2[start];
    arr2[start] = arr2[end];
    arr2[end] = temp;

    start++;
    end--;
}

console.log(arr2);
