/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;
    let rowsLen = matrix.length,
        colsLen = matrix[0].length;
    let left = 0,
        right = rowsLen * colsLen - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (matrix[Math.floor(mid / colsLen)][mid % colsLen] === target) {
            return true;
        } else if (target < matrix[Math.floor(mid / colsLen)][mid % colsLen]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};