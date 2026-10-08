class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Create tree
const root = new TreeNode(1);

root.left = new TreeNode(2);
root.right = new TreeNode(3);

root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);


// Inorder: Left → Root → Right
function inorder(root) {
    if (root === null) return;

    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
}


// Preorder: Root → Left → Right
function preorder(root) {
    if (root === null) return;

    console.log(root.value);
    preorder(root.left);
    preorder(root.right);
}


// Postorder: Left → Right → Root
function postorder(root) {
    if (root === null) return;

    postorder(root.left);
    postorder(root.right);
    console.log(root.value);
}