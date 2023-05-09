/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMin = function(nums) {
//     // Brute force O(N)
//     let currentMin = nums[0];
//     for(let i = 1; i < nums.length; i++) {
//       currentMin = Math.min(currentMin, nums[i]);
//     }
//   return currentMin;
// };


var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
};