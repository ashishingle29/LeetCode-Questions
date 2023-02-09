/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    //  row last index
    let last = matrix[0].length - 1;
    
    for(let i=0; i<matrix.length; i++)
        if(matrix[i][last] >= target)
            return matrix[i].includes(target);
    return false;
};