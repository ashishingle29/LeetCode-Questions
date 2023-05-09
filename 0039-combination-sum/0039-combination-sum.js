/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
  let dfs = (remain, path, start) => {
    if (remain < 0) return;
    if (remain === 0) {
      result.push(path);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      dfs(remain - candidates[i], [...path, candidates[i]], i);
    }
  }
  dfs(target, [], 0);
  return result;
};