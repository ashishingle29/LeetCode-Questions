/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = s.split(" ")
     let newarr =[]
    for(let i=0; i<str.length; i++){
        let sstr = str[i].split("")
        let l=0
        let r = sstr.length-1
       
        while(l<r){
            sstr[l]= sstr[l].concat(sstr[r])
            sstr[r]= sstr[l].slice(0,-1)
            sstr[l]= sstr[l].slice(1)
            l++
            r--
        }
        newarr.push(sstr.join(""))
    }
    return newarr.join(" ")
};