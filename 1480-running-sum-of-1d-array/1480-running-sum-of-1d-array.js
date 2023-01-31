/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let arr=[];
    sum=0;
    for(let i=0;i<nums.length;i++){
        sum=nums[i]+sum
        arr.push(sum)
    }
    return arr;
};