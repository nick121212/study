const { bst } = require("./tree");

/**
 * 二叉树中序遍历
 * 		左 -> 根 -> 右
 * @param {Array<number>} node 二叉树根节点
 */
function middleSort(node) {
    if (!node) {
        return;
    }

    middleSort(node.left);
    console.log(node.show());
    middleSort(node.right);
}

console.log(middleSort(bst.root));
