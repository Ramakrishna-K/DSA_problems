// We will delete 20.

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new Node(10);

head.next = new Node(20);
head.next.next = new Node(30);


// DELETE VALUE 20

let current = head;

while (current.next !== null) {

    if (current.next.data === 20) {

        current.next = current.next.next;

        break;
    }

    current = current.next;
}


// PRINT

current = head;

while (current !== null) {
    console.log(current.data);
    current = current.next;
}