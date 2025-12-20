// Brute force apporach -----------------------

function removeDup(arr) {

    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

// console.log(removeDup([1, 1, 1, 2, 2, 3, 3, 3]))


// Two Pointer ------------------------------

function removeDupTwoPointer(arr) {
    let i = 0;
    for (let j = i; j < arr.length; j++) {
        if(arr[j] !== arr[i]){
            i++;
            arr[i] = arr[j];
        }
    }
    return arr.slice(0,i+1)
}

console.log(removeDupTwoPointer([1, 1, 1, 2, 2, 3, 3, 3]))












