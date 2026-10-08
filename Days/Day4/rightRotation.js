let arr = [1, 2, 3, 4, 5];

let temp = arr[arr.length - 1]; // Store last element

for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];        // Shift elements right
}

arr[0] = temp;                  // Place last element at front

console.log(arr);

// using the function and k value while loop

function rotateRight(arr, k) {
    let n = arr.length;

    k = k % n;

    reverse(arr, 0, n - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);

    return arr;
}

function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] =
            [arr[end], arr[start]];

        start++;
        end--;
    }
}

console.log(rotateRight([1,2,3,4,5],2));

// without while  using the functions 

function rotateRight(arr, k) {
    let n = arr.length;

    for (let i = 0; i < k; i++) {

        let last = arr[n - 1];

        for (let j = n - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }

        arr[0] = last;
    }

    return arr;
}

console.log(rotateRight([1,2,3,4,5],2));
