/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let modulo = 1000000007
  let sum = 0;
  
  for(let i=0; i<arr.length; i++){
    let first = i-1;
    let last = i+1
    
    while(first>=0 && arr[first]>= arr[i]){
      first--
    }
    
    while(last< arr.length && arr[last] > arr[i]){
      last++
    }
    
    sum = (sum + (last-i) * (i-first) *  arr[i]%modulo)%modulo
    
  }
    
    return sum
};