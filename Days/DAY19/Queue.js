// Think of people standing in a line.

// 10 → 20 → 30
// ↑           ↑
// Front      Rear

// First person comes out first → FIFO

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(value) {
        this.items.push(value);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }
}

const q = new Queue();

q.enqueue(10); // add 10
q.enqueue(20); // add 20
q.enqueue(30); // add 30

console.log(q.items);     // [10, 20, 30]
console.log(q.dequeue()); // 10
console.log(q.peek());    // 20