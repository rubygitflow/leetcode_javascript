// Definition for singly-linked list.
var ListNode = function(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
  this.stringify = function(){
    let str = '[' + (this.val ? this.val.toString() : '');
    tail = this.next
    while(tail) {
      str += ','+ (tail.val ? tail.val.toString() : 'None')
      tail = tail.next
    }
    return str + ']';    
  }
};

var add_linked_list = function(data, pos = -1) {
  if (!data) return new ListNode()
  let tail = [];
  tail.push(new ListNode(data[0]));
  for(const x of data.slice(1)) tail.push(new ListNode(x)); // Create a node
  for(let i = 0; i < data.length; i++) tail[i].next = tail[i+1]; // Move the tail pointer
  if (pos >= 0) tail[data.length - 1].next = tail[pos];
  return tail[0]
};

module.exports = { ListNode, add_linked_list };
