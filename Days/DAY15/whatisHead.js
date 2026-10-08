// The head is the first node of the linked list.
// Now head points to the first node.
// If you lose head, you can lose access to the entire list.

// 5. Complete Singly Linked List Example

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30);

node1.next = node2;
node2.next = node3;

let head = node1;

console.log(head);