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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let output = true
    
    const loop = (tree, min, max) =>{
        
        if((tree.val>min || min=== undefined )&& (tree.val<max || max === undefined)){
            if(tree.left){
                loop(tree.left, min, tree.val)
            }
            if(tree.right){
                loop(tree.right,tree.val,max)
            }
        }else{
            output = false
        }
    }
    loop(root)
    return output
};