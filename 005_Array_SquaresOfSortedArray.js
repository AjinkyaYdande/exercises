// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

function sqUsingBuiltIn(nums) {
    return nums.map((elem) => elem * elem).sort((a, b) => a - b);
}
// console.log(sqUsingBuiltIn([-4, 1, 0, 3, 10]))

function sqTwoPointer(nums) {
    if (!Array.isArray(nums) || nums.length === 0) return [];

    let n = nums.length;
    let finalArray = new Array(n);
    let left = 0;
    let right = n - 1;

    for (let i = n - 1; i >= 0; i--) {
        let leftSq = nums[left] * nums[left];
        let rightSq = nums[right] * nums[right];
        if (leftSq > rightSq) {
            finalArray[i] = leftSq;
            left++;
        }else{
            finalArray[i] = rightSq;
            right--;
        }
    }
    return finalArray;

}
console.log(sqTwoPointer([-4, 1, 0, 3, 10]))