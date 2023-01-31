/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    

   let total=0;
    for(let i=0; i<nums.length; i++){
        total= total + nums[i]
    }
   
    let leftsum=0;  
    let rightsum=0;  
   
    for(let j=0; j<nums.length; j++){
        rightsum = total - leftsum - nums[j]  //27

        if(leftsum==rightsum){
            return j
        }
        leftsum = leftsum + nums[j]   
    }
    return -1
    
}
    
