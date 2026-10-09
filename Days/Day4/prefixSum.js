function prefixSum(arr){
    let prefix = [ ];
            prefix[0] = arr[0];

    for(let i = 0; i < arr.length; i++){
        prefix[i] = prefix[i-1] + arr[i]
    }
    return prefix;
}
console.log(prefixSum[1,2,3,4,5])
