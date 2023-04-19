/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

 let grp = {};
   strs.forEach(element => {
      let sortstr = element.split("").sort().join("");
       if(grp[sortstr]){
           grp[sortstr].push(element)
       }else{
           grp[sortstr] = [element]
       }
   }) 
    
    return Object.values(grp)
};