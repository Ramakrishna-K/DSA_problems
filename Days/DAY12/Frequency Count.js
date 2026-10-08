function frequencyCount(arr) {
    const freq = {};
    for (const num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    return freq;
}

const arr = [1, 2, 2, 3, 1, 1];
console.log(frequencyCount(arr));


function frequencyCountMap(arr) {
    const freq = new Map();
    for (const num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    return freq;
}

console.log(frequencyCountMap([1, 2, 2, 3, 1, 1]));
