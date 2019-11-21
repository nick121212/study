/**
 * 交换两数字的位置
 * @param {Array<number>} arr 需要交换的数组
 * @param {Number}        i   交换的数组索引1
 * @param {Number}        j   交换的数组索引2
 */
function swap(arr, i, j) {
    const temp = arr[i];

    arr[i] = arr[j];
    arr[j] = temp;
}

/**
 * 堆排序
 * 		大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列；
 * 		小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列；
 * 时间复杂度：平均 O(nlogn)、最坏 O(nlogn)
 * 空间复杂度: O(1), 不稳定
 * 实现方法：
 * 		基于完全二叉树的特性
 *          1. 左边子节点位置 = 当前父节点的两倍 + 1 右边子节点位置 = 当前父节点的两倍 + 2
 * @param {Array<number>} arr
 * @param {boolean}       asc
 */
function heapSort(arr, asc = true) {
    maxHeapSort(arr, arr.length);

    // 排序，最头上的是最大值，因此只要排除第一个元素之外的元素在做一次堆排序就行

    for (let i = 0; i < arr.length; i++) {
        maxHeapSort(arr, arr.length - i);

        console.log(arr, "middle");
        swap(arr, 0, arr.length - i - 1);
    }

    return arr;
}

function maxHeapSort(arr, len) {
    // 建堆
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        heapify(arr, i, len);
    }
}

function heapify(arr, currentNode, size) {
    if (currentNode > size) {
        return;
    }

    let left = currentNode * 2 + 1,
        right = currentNode * 2 + 2,
        max = currentNode;

    if (left < size && arr[left] > arr[max]) {
        max = left;
    }

    if (right < size && arr[right] > arr[max]) {
        max = right;
    }

    if (max != currentNode) {
        swap(arr, currentNode, max);

        heapify(arr, max, size);
    }
}

console.log(heapSort([5, 2, 7, 3, 6, 1, 4]));
