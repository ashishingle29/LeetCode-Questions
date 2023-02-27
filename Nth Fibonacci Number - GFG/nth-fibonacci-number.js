//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let obj = new Solution();
        console.log(obj.nthFibonacci(n));
        
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} n
 * @returns {number}
*/

class Solution {
    
    nthFibonacci(n)
    {
        let f = new Array(n+2);
        f[0] = 0;
        f[1] = 1;
        f[2] = 1;
        
        for(let i=3; i<=n; i++){
            f[i] = (f[i-1] + f[i-2])%1000000007
        }
    return f[n]%1000000007
        
    }
}