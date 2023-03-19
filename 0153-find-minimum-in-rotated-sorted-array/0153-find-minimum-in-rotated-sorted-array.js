/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // Brute force O(N)
    let currentMin = nums[0];
    for(let i = 1; i < nums.length; i++) {
      currentMin = Math.min(currentMin, nums[i]);
    }
  return currentMin;
};