/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    
    if(root == null){
        return 0
    }
    //[7,8,9,10,11,12,13,14,15]
        
    if(root.val>=low && root.val<=high)
        return root.val + rangeSumBST(root.right, low, high) + rangeSumBST(root.left, low, high) //10
    if(root.val<low){
      return rangeSumBST(root.right,low, high)}
    if(root.val>high){
      return  rangeSumBST(root.left, low,high)
    
       }
    
};