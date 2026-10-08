class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);

    let index = this.heap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[parent] <= this.heap[index]) {
        break;
      }

      [this.heap[parent], this.heap[index]] =
        [this.heap[index], this.heap[parent]];

      index = parent;
    }
  }

  getMin() {
    return this.heap[0];
  }
}

const minHeap = new MinHeap();

minHeap.insert(30);
minHeap.insert(10);
minHeap.insert(20);
minHeap.insert(5);

console.log(minHeap.heap);
console.log(minHeap.getMin());