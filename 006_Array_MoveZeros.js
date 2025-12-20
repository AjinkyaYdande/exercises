function moveZeros(nums) {
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[left], nums[i]] = [nums[i], nums[left]];
            left++;
        }
    }
    return nums;
}

console.log(moveZeros([0, 1, 0, 3, 12]));