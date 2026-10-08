class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

let head = new Node(10);

head.next = new Node(20);
head.next.next = new Node(30);


// INSERT 40 AT END

let newNode = new Node(40);

let current = head;

while (current.next !== null) {
    current = current.next;
}

current.next = newNode;


// PRINT

current = head;

while (current !== null) {
    console.log(current.data);
    current = current.next;
}