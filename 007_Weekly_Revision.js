// 1. Reverse a string
// 2. Merge Sorted Array - Optimised Pending
// 3. Two Sum
// 4. Remove Duplicates
// 5. Squares of Sorted Array
// 6. Move Zeros
// 7. Reverse an Integer

// 1. Reverse a string ---------------------------------
{

    function reverseString(str) {
        let stri = "";
        for (let i = str.length - 1; i >= 0; i--) {
            stri += str[i];
        }
        return stri;
    }
    // console.log(reverseString("I am Ajinkya")); 
    // T - O(n^2) because using string as string is immutable it is creating new string every time
    // S - O(n)

    function reverseStringUsingArr(str) {
        let arr = [];
        for (let i = str.length - 1; i >= 0; i--) {
            arr.push(str[i]);
        }
        return arr.join("");
    }
    // console.log(reverseStringUsingArr("I am Ajinkya"));
    // T - O(n) 
    // S- O(n)

    function reverseStringUsingBuiltIn(str) {
        return str.split("").reverse().join("");
    }
    // console.log(reverseStringUsingBuiltIn("I am Ajinkya"));
    // T - O(n)
    // S - O(n)
}
// End of Reverse String ----------------------------------

// 2. Merge Sorted Array --------------------------------
{
    function mergeSortedArr(arr1, arr2) {
        return [...arr1, ...arr2].sort((a, b) => a - b);
    }
    // console.log(mergeSortedArr([0, 3, 4, 31], [4, 6, 30]))
    // T - O(n log n) because of sorting
}
// End of Merge Sorted Array ---------------------------

// 3. Two Sum ------------------------------------------
{
    function twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j];
                }
            }
        }
        return [-1, -1];
    }
    // console.log(twoSum([2, 7, 11, 15], 90))

    function twoSumTwoPointer(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        for (let i = 0; i < nums.length; i++) {
            let sum = nums[left] + nums[right];
            if (sum === target) {
                return [left, right];
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        return [-1, -1];
    }
    // console.log(twoSumTwoPointer([2, 7, 11, 15], 9))

    function twoSumHash(nums, target) {
        let myMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (myMap.has(target - nums[i])) { // Remind the formula
                return [myMap.get(target - nums[i]), i];
            } else {
                myMap.set(nums[i], i);
            }
        }
        return [-1, -1];
    }
}
// console.log(twoSumHash([2, 7, 11, 15], 9))
// End of Two Sum --------------------------------------

// 4. Remove Duplicates from Sorted Array ------------
{
    function removeDupBrute(nums) {
        let finalArr = [];
        for (let i = 0; i < nums.length; i++) {
            if (!finalArr.includes(nums[i])) {
                finalArr.push(nums[i]);
            }
        }
        return finalArr;
    }
    // console.log(removeDupBrute([1, 1, 1, 2, 2, 3, 3, 3]));
    // T - O(n^2) because using includes in a loop else it would be O(n)
    // S - O(n)

    function removeDupUsingBuiltIn(nums) {
        return new Set(nums);
    }
    // console.log(removeDupUsingBuiltIn([1, 1, 1, 2, 2, 3, 3, 3]));

    function removeDupTwoPointer(nums) {
        let left = 0;
        for (let right = left; right < nums.length; right++) {
            if (nums[left] < nums[right]) {
                left++;
                [nums[left], nums[right]] = [nums[right], nums[left]];
            }
        }
        return nums.slice(0, left + 1);
    }
    // console.log(removeDupTwoPointer([1, 1, 1, 2, 2, 3, 3, 3, 4]));
    // T - O(n)
    // S - O(n);
}
// End of Remove Duplicate -----------------------------

// 5. Squares of Sorted Array -------------------------
{
    function squareArray(nums) {
        let sq = [];
        for (let i = 0; i < nums.length; i++) {
            sq.push(Math.abs(nums[i]) * Math.abs(nums[i]));
        }
        return sq.sort((a, b) => a - b);
    }
    // console.log(squareArray([-4, 1, 0, 3, 10]))
    // T - O(n log n)
    // S - O(n)

    function squareArrayUsingBuiltIn(nums) {
        return nums.map((n) => n * n).sort((a, b) => a - b);
    }
    // console.log(squareArrayUsingBuiltIn([-4, 1, 0, 3, 10]))

    function squareArrayTwoPointer(nums) {
        let left = 0;
        let right = nums.length - 1;
        let result = new Array(nums.length); // to avoid conflict in original array
        for (let i = nums.length - 1; i >= 0; i--) {
            let leftSq = nums[left] * nums[left];
            let rightSq = nums[right] * nums[right];
            if (leftSq > rightSq) {
                result[i] = leftSq;
                left++;
            } else {
                result[i] = rightSq;
                right--;
            }
        }
        return result;
    }
    // console.log(squareArrayTwoPointer([-4, 1, 0, 3, 10]))
}

// Mistakes -
// 1. Forgot to create new Array
// 2. Forgot to utilize i into new Array
// 3. Forgot comparision condition
// -----------------------------------------------------

// 6. Move Zeros ---------------------------------------
{
    function moveZero(nums) {
        let left = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                [nums[left], nums[i]] = [nums[i], nums[left]];
                left++;
            }
        }
        return nums;
    }
    // console.log(moveZero([0, 1, 0, 3, 12]))
}
// Need revision
// -----------------------------------------------------

// 7. Reverse an Integer ------------------------------
function revInt(x) {
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    let reversed = 0;
    while (x > 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }
    return sign * reversed;

}
console.log(revInt(1234))
// ----------------------------------------------------



