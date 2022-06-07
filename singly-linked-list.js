/**
 * Singly linked lists
 */

// An ordered list of data, with no index like an array
// Contains a head and a tail with a length property

// Each element is a node

// Linked lists are great at assertion and deletion
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// // bad way of representing a linked list
// const first = new Node("hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

// console.log(first);

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    // my first attempt, it was okay
    //   if (this.head === null) {
    //     this.head = new Node(val);
    //     this.tail = new Node(val);
    //   }
    //   this.tail.next = new Node(val);

    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.length = null;
    }
    return current;
  }
}
