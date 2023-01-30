/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    if((length >= 10**4 || width >=10**4 || height>=10**4 || mass>=10**4 || length*width*height >=10**9) && mass>=100){ 

             return "Both"
            }else if(mass>=100){
                return "Heavy"
            }else if(length >= 10**4 || width >=10**4 || height>=10**4 || mass>=10**4 || length*width*height >=10**9){
                return "Bulky"
            }else{
                return "Neither"
            }
};