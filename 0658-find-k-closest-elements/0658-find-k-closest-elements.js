/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */


var findClosestElements = function(arr, k, x) {
    let findMid = function(start, end){
    if(start>end){
        return start
    }

    let mid = Math.floor((start+end)/2)

    if(arr[mid]==x){
            return mid
    }
    
    if(arr[mid]>x){
        return findMid(start, mid-1)
    }

    return findMid(mid+1, end)

}
    let i = findMid(0,arr.length-1)

    let left = Math.max(0,i-k)
    let right = Math.min(arr.length-1,i+k)

    while(right-left+1>k){
        if(arr[right]-x<x-arr[left]){
            left++
        }else if(x-arr[left]<=arr[right]-x){
            right--
        }
    }
    return arr.slice(left,right+1)
};