class UnionFind {
  constructor(n) {
    this.parent = [];

    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }

    return this.parent[x];
  }

  union(a, b) {
    let rootA = this.find(a);
    let rootB = this.find(b);

    if (rootA !== rootB) {
      this.parent[rootB] = rootA;
    }
  }
}

const uf = new UnionFind(5);

uf.union(0, 1);
uf.union(1, 2);

console.log(uf.find(2)); // 0
console.log(uf.find(3)); // 3