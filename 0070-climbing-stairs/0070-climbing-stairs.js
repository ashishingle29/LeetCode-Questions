/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let fiba = [0,1,2];
    if(n<3) return fiba[n]
    for(let i=3; i<=n; i++){
        fiba[i] = fiba[i-1]+ fiba[i-2]
    }
    
    return fiba[n]
};