function isValid(s) {
    const stack = [];

    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (let char of s) {

        // Opening bracket
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        }

        // Closing bracket
        else {
            if (stack.length === 0) {
                return false;
            }

            const top = stack.pop();

            if (top !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}


console.log(isValid("()"));       // true

console.log(isValid("()[]{}"));   // true

console.log(isValid("{[]}"));     // true

console.log(isValid("(]"));       // false

console.log(isValid("([)]"));     // false