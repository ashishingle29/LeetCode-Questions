/**
 * @param {number[]} nums
 * @return {number[]}
 */


const majorityElement = nums => {
    const counts = {};
    const ans = [];
    const threshold = Math.floor(nums.length/3);
    for (let num of nums){
        if (counts[num] !== undefined) counts[num]++;
        else counts[num] = 1;
        if (counts[num] === threshold + 1) ans.push(num);
    }
    return ans;
};