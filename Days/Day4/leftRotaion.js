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

console.log(rotateRight([1, 2, 3, 4, 5], 3));

// let arr = [1, 2, 3, 4, 5];

// let first = arr[0]; 

// for (let i = 0; i < arr.length-1; i++) {
//     arr[i] = arr[i + 1];        // Shift elements right
// }

// arr[arr.length-1] = first;                  // Place last element at front

// console.log(arr);

let arr = [1, 2, 3, 4, 5];

arr.push(arr.splice(1, 2)[0]);

console.log(arr)



