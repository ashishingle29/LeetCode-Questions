/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let feba = [0,1,1]
    
    for(let i=3; i<=n; i++){
        feba[i] = feba[i-1] + feba[i-2] + feba[i-3]
    }
    return feba[n]
};