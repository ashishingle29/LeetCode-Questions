/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    let xx= x.toString();
    let xlen = x.toString().length;
    for(let i=0; i<xlen;i++){
        if(xx[i]!==xx[xlen-1-i]){
            return false
        }
    }
    return true
    
};