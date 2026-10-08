function twoSum(arr, target) {
    const seen = new Map();
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(arr[i], i);
    }
    return [];
}

const arr = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(arr, target));
