/**
 * @param {number[]} nums
 * @return {number}
 */

function rec(nums,n,i, memo={}){
    if(i>=n) return 0;
    if(i in memo) return memo[i]
    let take = rec(nums,n,i+2, memo)+nums[i]
    let nontake = rec(nums, n,i+1, memo);
    return memo[i] = Math.max(take,nontake)
}


var rob = function(nums) {
    let n = nums.length
    
    return rec(nums,n,0)
};


