// Brute Force (O(n²))

let arr = [2, 1, 5, 1, 3, 2];
let k = 3;

let maxSum = 0;

for (let i = 0; i <= arr.length - k; i++) {

    let sum = 0;

    for (let j = i; j < i + k; j++) {
        sum += arr[j];
    }

    if (sum > maxSum) {
        maxSum = sum;
    }
}

console.log(maxSum);



//  second one 

let arr = [2, 1, 5, 1, 3, 2];
let k = 3;

let windowSum = 0;

// First window
for (let i = 0; i < k; i++) {
    windowSum += arr[i];
}

let maxSum = windowSum;

// Slide window
for (let i = k; i < arr.length; i++) {

    windowSum = windowSum - arr[i - k] + arr[i];

    if (windowSum > maxSum) {
        maxSum = windowSum;
    }
}

console.log(maxSum);