class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new Node(10);

head.next = new Node(20);
head.next.next = new Node(30);


// INSERT 25 AT POSITION 2

let newNode = new Node(25);

let current = head;

for (let i = 0; i < 1; i++) {
    current = current.next;
}

newNode.next = current.next;
current.next = newNode;


// PRINT

current = head;

while (current !== null) {
    console.log(current.data);
    current = current.next;
}