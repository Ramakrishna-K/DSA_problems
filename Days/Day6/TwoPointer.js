function pairSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) {
            return [arr[left], arr[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return "Pair not found";
}

let arr = [2, 3, 4, 6, 8, 9, 15];
let target = 11;

console.log(pairSum(arr, target));