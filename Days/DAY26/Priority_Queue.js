class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    this.queue.push({ value, priority });

    this.queue.sort((a, b) => a.priority - b.priority);
  }

  dequeue() {
    return this.queue.shift();
  }
}

const pq = new PriorityQueue();

pq.enqueue("Patient A", 3);
pq.enqueue("Patient B", 1);
pq.enqueue("Patient C", 2);

console.log(pq.dequeue());
console.log(pq.dequeue());