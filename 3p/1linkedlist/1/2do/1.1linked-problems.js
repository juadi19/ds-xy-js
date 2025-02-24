/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of a char, number, u object
 * @returns {bool} - true or false, if value v exist or not
 * may use traverse
 *
 * @example
 * contains(3)
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  clear() {
    this.head = null;
  }

  contains(v) {
    let node = this.head;
    while (node != null && node.data != v) node = node.next;
    return node ? true : false;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  insert(node) {
    this.getLast().next = node;
  }
}

class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = new ListNode(8);
let node = new ListNode(2);
head.next = node;
let node1 = new ListNode("f");
node.next = node1;

let list = new LinkedList(head);

console.log(list.contains("f"));
