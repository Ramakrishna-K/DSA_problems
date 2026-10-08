function deleteNode(root, value) {
    if (root === null) return null;

    if (value < root.value) {
        root.left = deleteNode(root.left, value);
    } else if (value > root.value) {
        root.right = deleteNode(root.right, value);
    } else {
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;

        root.value = findMin(root.right);
        root.right = deleteNode(root.right, root.value);
    }

    return root;
}