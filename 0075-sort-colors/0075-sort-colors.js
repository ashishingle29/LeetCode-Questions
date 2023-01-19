/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let n= nums.length;
    let low= 0;
    let mid = 0;
    let high = n-1;

    while(mid<=high){
        if(nums[mid]==0){
            temp = nums[low];
            nums[low]=nums[mid]
            nums[mid]=temp
            low++;
            mid++
        }else if(nums[mid]==2){
            temp = nums[high];
            nums[high]=nums[mid]
            nums[mid]=temp
            high--;
        }else{
            mid++
        }
    }
    return nums;
};