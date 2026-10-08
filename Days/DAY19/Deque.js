// Deque = Double Ended Queue

// You can add/remove from both sides.


class Deque {
    constructor() {
        this.items = [];
    }

    addFront(value) {
        this.items.unshift(value);
    }

    addRear(value) {
        this.items.push(value);
    }

    removeFront() {
        return this.items.shift();
    }

    removeRear() {
        return this.items.pop();
    }
}

const d = new Deque();

d.addFront(10);
d.addRear(20);

console.log(d.items); // [10, 20]

d.removeFront(); // removes 10
d.removeRear();  // removes 20