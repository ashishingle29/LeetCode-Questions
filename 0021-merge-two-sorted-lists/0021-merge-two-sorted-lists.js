/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let newHead = new ListNode(0); //merged List
   let temp = newHead;


   while(list1 != null && list2 != null){


       if(list1.val < list2.val)
           {
               temp.next = list1;
               list1 = list1.next;
               temp = temp.next;

           }


       else{
           temp.next = list2;
           list2 = list2.next;
           temp = temp.next;

       }


   }


   while(list1 != null){
       temp.next = list1;
       list1 = list1.next;
       temp = temp.next;
   }


      while(list2 != null){
       temp.next = list2;
       list2 = list2.next;
       temp = temp.next;
   }
   return newHead.next;
};