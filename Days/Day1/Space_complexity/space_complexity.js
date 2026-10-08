function copyArray(arr) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i]);
    }

    return newArray;
}

let numbers = [10, 20, 30, 40, 50];

console.log(copyArray(numbers));