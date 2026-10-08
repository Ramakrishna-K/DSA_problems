let str = "hello";

console.log(str.substring(0, 2)); // he
console.log(str.substring(1, 4)); // ell


// Program: Check if a substring exists

let str = "javascript";
let sub = "script";

if (str.includes(sub)) {
    console.log("Substring Found");
} else {
    console.log("Not Found");
}