// This apporach will only work if array is sorted

function twoSum(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        let sum = nums[left] + nums[right];
        if(sum === target){
            return [left,right];
        }else if(sum < target){
            left++;
        }else{
            right--;
        }
    }
    return [-1,-1];
}

console.log(twoSum([2, 7, 11, 15], 26))