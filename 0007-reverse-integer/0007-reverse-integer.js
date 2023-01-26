/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(str) {
let nums = str.toString().split("")
    let i=0
    let j=nums.length-1
    let temp

    
    if(nums[0]== "-"){
            i++
        }
    while(i<j){
        temp = nums[j]
        nums[j]=nums[i]
        nums[i]= temp
            i++;
            j--;
    }
   let result = nums.join("")
   if(result >= -2147483648 && result <= 2147483648 ){
       return result
   }
    return 0
};