function rob(nums) {
  let dp = [0, 0];

  for (let i = 0; i < nums.length; i++) {
    dp[i + 2] = Math.max(
      dp[i + 1],
      dp[i] + nums[i]
    );
  }

  return dp[nums.length + 1];
}

console.log(rob([2, 7, 9, 3, 1])); // 12