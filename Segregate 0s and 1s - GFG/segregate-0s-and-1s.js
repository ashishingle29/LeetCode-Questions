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
        let arr = readLine().trim().split(" ").map((x) => parseInt(x));
        let obj = new Solution();
        let res = obj.segregate0and1(arr,n);
        let s = "";
        for(let j = 0;j < n;j++){
            s+=arr[j]+" ";
        }
        console.log(s);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
*/

class Solution {

    segregate0and1(arr,n){
        
        //Method One Sort
        // arr.sort((a,b)=>a-b)
        
        // Second Method Count 
        // let zero =0;
        
        // for(let i=0; i<arr.length; i++){
        //     if(arr[i]==0){
        //         zero++
        //     }
        // }
        
        // for(let i=0; i<zero; i++){
        //     arr[i]=0
        // }
        
        // for(let i=zero; i<arr.length; i++){
        //     arr[i]=1
        // }
        
        //third Method swap
        let l=0
        let r=n-1
        
        while(l<r){
            if(arr[l]==0){
                l++
                continue;
            }
            if(arr[r]==1){
                r--
                continue;
            }
            
            //swap
            arr[l]= arr[l] + arr[r]
            arr[r]= arr[l] - arr[r]
            arr[l]= arr[l] - arr[r]
            
            l++;
            r--;
        }
       
    }
}