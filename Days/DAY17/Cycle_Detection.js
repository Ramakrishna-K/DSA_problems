class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function hasCycle(head) {

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {

        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

let head = new Node(10);

head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

// Create cycle
head.next.next.next.next = head.next;

console.log(hasCycle(head));