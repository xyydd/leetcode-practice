/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode (val) {
    this.val = val;
    this.next = null;
}
var mergeTwoLists = function(l1, l2) {
    let res = new ListNode(null);
    let resc = res;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            resc.next = new ListNode(l1.val);
            l1 = l1.next;
            resc = resc.next;
        } else {
            resc.next = new ListNode(l2.val);
            l2 = l2.next;
            resc = resc.next;
        }
    }
    if (l1) {
        resc.next = l1;
    }
    if (l2) {
        resc.next = l2;
    }
    return res.next;
};