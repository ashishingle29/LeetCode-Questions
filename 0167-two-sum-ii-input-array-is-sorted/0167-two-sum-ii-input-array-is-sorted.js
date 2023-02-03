/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

 // numbers = [2,7,11,15], target = 9

var twoSum = function(numbers, target) {
    let len = numbers.length
    let first = 0
    let last = len-1

    while(first < last){
        let sum = numbers[first]+numbers[last]
        if(sum == target){
            return [first+1,last+1]
        }else if(sum> target){
            last--;
        }else{
            first++
        }
    }
    return [-1,-1]
    
};