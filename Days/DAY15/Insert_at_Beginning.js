class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new Node(10);

head.next = new Node(20);
head.next.next = new Node(30);


// INSERT 5 AT BEGINNING

let newNode = new Node(5);

newNode.next = head;
head = newNode;


// PRINT

let current = head;

while (current !== null) {
    console.log(current.data);
    current = current.next;
}