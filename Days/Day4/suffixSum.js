function suffixSum(arr){
    let n =  arr.length;
    let suffix = [ ];
    suffix[n-1] = arr[n-1];

    for(let i = n-2; i >= 0; i--){
    suffix[i] = suffix[i+1] + arr[i]
    }
    return suffix;
}
console.log(suffixSum([2,4,6,8,10]));
