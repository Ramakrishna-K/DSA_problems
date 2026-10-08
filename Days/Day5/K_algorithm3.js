function kadane(arr){

    let currentSum = 0;
    let maxSum = -Infinity;

    let start = 0;
    let end = 0;
    let tempStart = 0;

    for(let i=0;i<arr.length;i++){

        currentSum += arr[i];

        if(currentSum > maxSum){

            maxSum = currentSum;
            start = tempStart;
            end = i;

        }

        if(currentSum < 0){

            currentSum = 0;
            tempStart = i + 1;

        }

    }

    return {
        maxSum,
        subArray: arr.slice(start,end+1)
    };

}

console.log(kadane([2,-3,4,-1,2,1,-5,4]));