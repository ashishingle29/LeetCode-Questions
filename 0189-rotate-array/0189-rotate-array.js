/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rev = function(nums, i, j){
    while(i<j){
    nums[i]=nums[i]+nums[j]
    nums[j]=nums[i]-nums[j]
    nums[i]=nums[i]-nums[j]
            i++;
            j--;
    }
    return nums;
}


var rotate = function(nums, k) {
 k%= nums.length
    
  // if(nums.length=1 || nums.length ==2)return rev(nums,0,nums.length-1)
    rev(nums,0,nums.length-1)
    rev(nums,0,k-1)
    rev(nums,k,nums.length-1)

    console.log(nums)
};