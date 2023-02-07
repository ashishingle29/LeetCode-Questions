/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let left = 0;
    let right = 0;
    let prefix = 0;
    let oddno = 0;
    let ans = 0;
    
    for(let right=0; right<nums.length; right++){
        
        if(nums[right]%2 != 0){
            oddno++
        }
        
        while(oddno>k && left<right){
            if(nums[left]%2 != 0){
                oddno--
                prefix=0
                left++
            }
        }
        
        while(nums[left]%2 == 0 && left<right){
            left++
            prefix++
        }
        
        if(oddno == k){
            ans += prefix+1
        }
        
    }
    
    return ans
};




