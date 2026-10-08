class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Create root
const root = new TreeNode(10);

// Add children
root.left = new TreeNode(20);
root.right = new TreeNode(30);

// Add children to 20
root.left.left = new TreeNode(40);
root.left.right = new TreeNode(50);