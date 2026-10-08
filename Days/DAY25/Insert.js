function insert(root, value) {
    if (root === null) {
        return new Node(value);
    }

    if (value < root.value) {
        root.left = insert(root.left, value);
    } else {
        root.right = insert(root.right, value);
    }

    return root;
}