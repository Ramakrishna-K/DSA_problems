// code 1

function moveZeroes(arr) {

    let result = [];

    for (let num of arr) {

        if (num !== 0) {
            result.push(num);
        }

    }

    while (result.length < arr.length) {
        result.push(0);
    }

    return result;

}

console.log(moveZeroes([0,1,0,3,12]));

// code 2
function moveZeroes(arr) {

    let j = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== 0) {

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            j++;

        }

    }

    return arr;

}

console.log(moveZeroes([0,1,0,3,12]));

//  code 3

function moveZeroes(arr) {

    let j = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== 0) {

            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;

        }

    }

    return arr;

}

console.log(moveZeroes([0,1,0,3,12]));