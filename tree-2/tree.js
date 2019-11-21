//创建二叉树
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}
Node.prototype.show = function() {
    return this.data;
};
function BST() {
    this.root = null;
}
BST.prototype.insert = function(data) {
    var node = new Node(data, null, null);

    if (this.root == null) {
        this.root = node;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = node;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
};

var bst = new BST();
var nums = [10, 3, 18, 2, 4, 13, 21, 9, 8, 9];

for (var i = 0; i < nums.length; i++) {
    bst.insert(nums[i]);
}

exports = module.exports = {
    bst,
    BST,
    Node
};
