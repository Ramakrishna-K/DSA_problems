class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function findMiddle(head) {

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {

        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

// Create Linked List
let head = new Node(10);

head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);

// Find middle
let middle = findMiddle(head);

console.log("Middle:", middle.data);