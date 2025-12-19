// Using Built-In methods
function mergeArr(arr1, arr2) {
    return [...arr1,...arr2].sort((a,b)=>a - b);
}

console.log(mergeArr([0, 3, 4, 31], [4, 6, 30]))

// Using loops
// function mergeSorted