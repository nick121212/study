const { bst } = require("./tree");

/**
 * 二叉树前序遍历
 * 		根 -> 左 -> 右
 * @param {Array<number>} node 二叉树根节点
 */
function frontSort(node) {
    if (!node) {
        return;
	}
	
	console.log(node.show());

    frontSort(node.left);
    frontSort(node.right);
}

console.log(frontSort(bst.root));
