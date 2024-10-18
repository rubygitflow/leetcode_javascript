// https://leetcode.com/problems/merge-k-sorted-lists/description/
// 23. Merge k Sorted Lists

const {
  ListNode,
  add_linked_list
} = require("./list_node");

const {
  MinPriorityQueue
} = require('@datastructures-js/priority-queue');

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (!lists.length) return new ListNode()

  let queue = new MinPriorityQueue();
  for(let i=0; i<lists.length; i++ ){
    if(lists[i]) queue.enqueue([lists[i].val, i])
  }

  let head = new ListNode(-1);
  let tail = head;
  while(!queue.isEmpty()) {
    const [_, list_index] = queue.dequeue();
    tail.next = lists[list_index]
    lists[list_index] = lists[list_index].next
    if(lists[list_index]) queue.enqueue([lists[list_index].val, list_index]);
    tail = tail.next
  }
  return head.next;
};

console.log(mergeKLists([add_linked_list([2,6]),add_linked_list([1,4,5]),add_linked_list([1,3,4])]).stringify());
// Output: [1,1,2,3,4,4,5,6]
console.log(mergeKLists([]).stringify());
// Output: []
console.log(mergeKLists([add_linked_list([])]).stringify());
// Output: []

module.exports = { mergeKLists };
