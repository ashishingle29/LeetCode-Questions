/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */







var merge = function(nums1, m, nums2, n) {
//     let p = m-1
//     let q = n-1
//     let r = n+m-1
    
//     for(let i=0; i<r; i++){ //n
//         if(nums1[p]<=nums2[q]){ 
//             nums1[r]=nums2[q]  
//             r--;
//             q--;
//         }else{
//             nums1[r]=nums1[p];
//             p--;
//             r--;
//             if(nums1[p]<=nums2[q]){
//                 nums1[r]=nums1[p];
//             }else{
//                 if(nums2[q]<nums1[p]){
//                     nums1[r]= nums1[p]
//                 }
//             }
//         }
//     }
//     return nums1;
    
     let p = m+n-1;
        m = m-1;
        n = n-1;
        
        while(n>=0){
            
            if(m>=0 && nums1[m]> nums2[n])
            {
                nums1[p] = nums1[m];
                p--;
                m--;
            }
            else
            {
                nums1[p] = nums2[n];
                p--;
                n--;
            }
        }
    return nums1;
    }