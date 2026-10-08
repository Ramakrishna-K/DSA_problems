function search(root, value) {
    if (root === null || root.value === value) {
        return root;
    }

    if (value < root.value) {
        return search(root.left, value);
    }

    return search(root.right, value);
}