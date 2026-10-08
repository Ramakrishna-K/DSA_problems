class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function mergeSortedLists(list1, list2) {

    let dummy = new Node(0);
    let current = dummy;

    while (list1 !== null && list2 !== null) {

        if (list1.data <= list2.data) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    }

    if (list2 !== null) {
        current.next = list2;
    }

    return dummy.next;
}

// List 1
let list1 = new Node(10);
list1.next = new Node(30);
list1.next.next = new Node(50);

// List 2
let list2 = new Node(20);
list2.next = new Node(40);
list2.next.next = new Node(60);

// Merge
let result = mergeSortedLists(list1, list2);

// Print
let current = result;

while (current !== null) {
    console.log(current.data);
    current = current.next;
}