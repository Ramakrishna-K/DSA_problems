class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseLinkedList(head) {

    let prev = null;
    let current = head;

    while (current !== null) {

        let nextNode = current.next;

        current.next = prev;

        prev = current;

        current = nextNode;
    }

    return prev;
}

// Create nodes
let head = new Node(10);

head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

// Reverse
head = reverseLinkedList(head);

// Print
let current = head;

while (current !== null) {
    console.log(current.data);
    current = current.next;
}