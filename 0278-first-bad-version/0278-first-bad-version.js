/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l=1
        let h=n
        let ans =-1
                                        //[1,2,3,4,5]
        while(l<=h){
            let m= l + Math.floor((h-l)/2)
            if(isBadVersion(m)){
                   ans=m
                   h=m-1
               }else{
                  l=m+1
               }
        }
        return ans;
        
    };
};