// Using loop ------------------------------------------------------
function revserseAString(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

// console.log(revserseAString("Hello Ajinkya")); // O(n^2) in worsr case 

// Using loop but with arr
function reverseStr(str) {
    let arr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        arr.push(str[i]);
    }
    return arr.join("");
}

console.log(reverseStr("Hello Ajinkyaaa")) // O(n)

// Using built-in methods ------------------------------------------

function revserseAStringBuiltIn(str) {
    return str.split("").reverse().join("");
}

// console.log(revserseAStringBuiltIn("Hello Ajinkya"));