// Imagine 5 seats in a circle.

// [10][20][30][ ][ ]

// Remove 10:

// [ ][20][30][ ][ ]

// Now the empty space can be reused.


class CircularQueue {
    constructor(size) {
        this.queue = new Array(size);
        this.size = size;
        this.front = 0;
        this.rear = 0;
    }

    enqueue(value) {
        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.size;
    }

    dequeue() {
        const value = this.queue[this.front];
        this.front = (this.front + 1) % this.size;
        return value;
    }
}

const cq = new CircularQueue(3);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);

console.log(cq.dequeue()); // 10