const { bst } = require("./tree");

/**
 * 二叉树中序遍历
 * 		左 -> 右 -> 根 
 * @param {Array<number>} node 二叉树根节点
 */
function backendSort(node) {
    if (!node) {
        return;
    }

    backendSort(node.left);
	backendSort(node.right);
	console.log(node.show());
}

console.log(backendSort(bst.root));
