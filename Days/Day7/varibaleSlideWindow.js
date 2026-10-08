let arr = [1, 2, 1, 0, 1, 1, 0];
let k = 4;

let left = 0;
let sum = 0;
let maxLength = 0;

for (let right = 0; right < arr.length; right++) {

    sum += arr[right];

    while (sum > k) {
        sum -= arr[left];
        left++;
    }

    let length = right - left + 1;

    if (length > maxLength) {
        maxLength = length;
    }
}

console.log(maxLength);