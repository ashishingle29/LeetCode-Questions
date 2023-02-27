/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    //Method 1
    
    let fiba = [0,1]
    
    for(let i=2; i<=n; i++){
        let x = fiba[i-1]+ fiba[i-2]
        fiba.push(x)
    }
    
   return fiba[n] 
    
    
    //Method 2
//     if(n === 0) return 0;
//   	if(n === 1) return 1;
//     return  fib(n - 1) + fib(n - 2)
    
};