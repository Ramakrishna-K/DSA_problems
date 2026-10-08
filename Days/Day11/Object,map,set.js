// 1. Object — Frequency Counting

const arr = [1, 2, 2, 3, 3, 3];

const freq = {};

for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
}

console.log(freq);


// 2. Map — Key → Value  

const map = new Map();

map.set("name", "Ravi");
map.set("age", 22);

console.log(map.get("name"));
console.log(map.has("age"));


// 3. Set — Unique Values

const set = new Set();

set.add(10);
set.add(20);
set.add(10);

console.log(set);

// ⭐ Most Important Problem: Two Sum

function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i];

        if (map.has(needed)) {
            return [map.get(needed), i];
        }

        map.set(nums[i], i);
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));