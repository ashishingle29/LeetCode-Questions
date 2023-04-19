/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let max = 0;
    let start = 0;
    
    let map = new Map();
    
    for(let i=0; i<s.length; i++){
        let x= s[i];
        
        if(map.get(x) >= start){
            start = map.get(x) + 1;
        }
        
         map.set(x, i)
        
       if(i-start+1 > max){
           max=i-start+1
       }
        
    }
    
    return max;
    
    
};