function permute(arr) {
    if (arr.length === 1) {
        return [arr];
    }

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];

        let remaining = arr.slice(0, i).concat(arr.slice(i + 1));

        let perms = permute(remaining);

        for (let perm of perms) {
            result.push([current, ...perm]);
        }
    }

    return result;
}

console.log(permute([1, 2, 3]));