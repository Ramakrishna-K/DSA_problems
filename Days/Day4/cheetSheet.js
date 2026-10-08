// ARRAY ROTATION

// Right Rotation
// [1,2,3,4,5], k=2
// → [4,5,1,2,3]

// Left Rotation
// [1,2,3,4,5], k=2
// → [3,4,5,1,2]

// --------------------------------

// PREFIX SUM

// prefix[i] = prefix[i-1] + arr[i]

// Example

// arr     = [2,4,6,8,10]
// prefix  = [2,6,12,20,30]

// Range Sum(L,R)

// prefix[R] - prefix[L-1]

// --------------------------------

// SUFFIX SUM

// suffix[i] = suffix[i+1] + arr[i]

// Example

// arr      = [2,4,6,8,10]
// suffix   = [30,28,24,18,10]

// --------------------------------

// Complexities

// Rotation (Optimal) : O(n)
// Prefix Build       : O(n)
// Suffix Build       : O(n)
// Range Sum Query    : O(1)