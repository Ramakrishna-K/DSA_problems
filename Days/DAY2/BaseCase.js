// function count(number){
    
//     if (n===0){
//         console.log("count stop");
//         return 0
//     }
//     console.log(n)
//     return count(n-1)

// }
// count(5)


function count(n){
    if( n === 0 ) return ;
    console.log(n)
    return count(n-1)
}
count(5)
