function count(number){
    
    if (n===0){
        console.log("count stop");
        return 0
    }
    console.log(n)
    return count(n-1)

}
count(5)