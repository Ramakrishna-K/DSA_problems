// Reverse String (Method 1 - Loop)


let str = "hello";
let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
}

console.log(reverse);


// Reverse String (Two Pointer)

let str = "hello";

let arr = str.split("");

let left = 0;
let right = arr.length - 1;

while (left < right) {

    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
}

console.log(arr.join(""));



// Print Characters One by One

let str = "JavaScript";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}


// Count Characters

let str = "Programming";
let count = 0;

for (let i = 0; i < str.length; i++) {
    count++;
}

console.log(count);

// Using split(), reverse(), join()
let str = "Hello";

let reverse = str.split("").reverse().join("");

console.log(reverse);