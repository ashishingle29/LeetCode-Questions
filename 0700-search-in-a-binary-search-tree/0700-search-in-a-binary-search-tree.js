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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {                      
    
    if(root == null || root.val == val){
        return root
        
    }else if(root.val > val){  //7 > 4
        return searchBST(root.left, val)
    }else{
        return searchBST(root.right, val)
    }
    

//......Second Method..............    
//     let node = root;
    
//     while(node){
//         if(node.val == val) return node
        
//         else if(val>node.val) node = node.right
        
//         else if(val<node.val) node = node.left
//     }
//     return null
    
 
};