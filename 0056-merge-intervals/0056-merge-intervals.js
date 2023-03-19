/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=> a[0]-b[0] )  
    let last = [null, -1];
    let result = []
    
    for(const [start, end] of intervals){
        if(start > last[1]){
            last = [start, end]
            result.push(last)
        }else{
            last[1] = Math.max(last[1], end)
        }
    }
    
    return result;
};