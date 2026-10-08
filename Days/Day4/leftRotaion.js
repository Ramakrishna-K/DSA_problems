 //without while  using the functions 

function rotateRight(arr, k) {
    let n = arr.length;

    for (let i = 0; i < k; i++) {

        let first = arr[0];

        for (let j = n - 1; j > n-1; j--) {
            arr[j] = arr[j - 1];
        }

        arr[n-1] = first;
    }

    return arr;
}

console.log(rotateRight([1,2,3,4,5],2));


let arr = [1, 2, 3, 4, 5];

let first = arr[0]; 

for (let i = 0; i < arr.length-1; i++) {
    arr[i] = arr[i + 1];        // Shift elements right
}

arr[arr.length-1] = temp;                  // Place last element at front

console.log(arr);