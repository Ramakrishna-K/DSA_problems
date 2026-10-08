// Program: Check Subsequence

function isSubsequence(str, sub) {
    let j = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === sub[j]) {
            j++;
        }
    }

    return j === sub.length;
}

console.log(isSubsequence("abcde", "ace"));