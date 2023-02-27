//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
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
  for (; i < t; i++) {
    let N = parseInt(readLine());
    let obj = new Solution();
    let res = obj.numberOfWays(N);
    console.log(res);
  }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number} N
 * @return {number}
 */
class Solution {
  numberOfWays(N) {
    let ways = [0,1,2]
    if(N<3) return ways[N]
    
    for(let i=3; i<=N; i++){
        ways[i] = (ways[i-1] + ways[i-2])%1000000007 
    }
    
    return ways[N]%1000000007
  }
}
