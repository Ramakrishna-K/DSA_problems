function maxSubarray(arr){

    let max = -Infinity;

    for(let i=0;i<arr.length;i++){

        let sum = 0;

        for(let j=i;j<arr.length;j++){

            sum += arr[j];

            max = Math.max(max,sum);

        }
    }

    return max;
}

console.log(maxSubarray([2,-3,4,-1,2,1,-5,4]));