class MaxHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);

    let index = this.heap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[parent] >= this.heap[index]) {
        break;
      }

      [this.heap[parent], this.heap[index]] =
        [this.heap[index], this.heap[parent]];

      index = parent;
    }
  }

  getMax() {
    return this.heap[0];
  }
}

const maxHeap = new MaxHeap();

maxHeap.insert(30);
maxHeap.insert(50);
maxHeap.insert(20);
maxHeap.insert(40);

console.log(maxHeap.heap);
console.log(maxHeap.getMax());