/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function subarraySum(nums, k) {
    let to = 0;       
    let pr = 0;       
    let ma = new Map();  

    ma.set(pr, (ma.get(pr) || 0) + 1);

    for (let num of nums) {
        pr += num;
        to += ma.get(pr - k) || 0;
        ma.set(pr, (ma.get(pr) || 0) + 1);
    }

    return to;
}