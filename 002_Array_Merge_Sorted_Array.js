// Using Built-In methods
function mergeArr(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

// console.log(mergeArr([0, 3, 4, 31], [4, 6, 30]))
// --------------------------------------------------

function mergeArrTwoPointer(arr1, arr2) {
    const mergedArray = [];
    let arrayItem1 = arr1[0];
    let arrayItem2 = arr2[0];
    let left = 1;
    let right = 1;

    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }

    while (arrayItem1 !== undefined || arrayItem2 !== undefined) {
        console.log(arrayItem1, arrayItem2, "--")
        if ( arrayItem2 === undefined || (arrayItem1 < arrayItem2)) {
            mergedArray.push(arrayItem1);
            arrayItem1 = arr1[left];
            left++
        } else {
            mergedArray.push(arrayItem2);
            arrayItem2 = arr2[right];
            right++;
        }
    }
    return mergedArray;

}

console.log(mergeArrTwoPointer([0, 3, 4, 31], [4, 6, 30]))

// T - O(m+n)
// S - O(m+n)