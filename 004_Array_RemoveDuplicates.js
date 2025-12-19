// Brute force apporach

function removeDup(arr) {

    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

console.log(removeDup([1, 1, 1, 2, 2, 3, 3, 3]))