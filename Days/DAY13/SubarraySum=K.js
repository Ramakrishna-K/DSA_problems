function subarraySum(nums, k) {
  const map = { 0: 1 };

  let sum = 0;
  let count = 0;

  for (let num of nums) {
    sum += num;

    const required = sum - k;

    if (map[required]) {
      count += map[required];
    }

    map[sum] = (map[sum] || 0) + 1;
  }

  return count;
}

console.log(subarraySum([1, 1, 1], 2));