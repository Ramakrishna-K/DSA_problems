function isValidBST(root, min = -Infinity, max = Infinity) {
    if (root === null) return true;

    if (root.value <= min || root.value >= max) {
        return false;
    }

    return (
        isValidBST(root.left, min, root.value) &&
        isValidBST(root.right, root.value, max)
    );
}