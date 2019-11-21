let len = 0;

/**
 * 堆排序
 * 		大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列；
 * 		小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列；
 * 时间复杂度：平均 O(nlogn)、最坏 O(nlogn)
 * 空间复杂度: O(1), 不稳定
 * 实现方法：
 * 		1. 创建一个堆 H[0……n-1]；
 *      2. 把堆首（最大值）和堆尾互换；
 *      3. 把堆的尺寸缩小 1，把剩余的元素从 0 开始重新创建堆
 *		4. 重复步骤 2，直到堆的尺寸为 1。
 * @param {Array<number>} arr
 * @param {boolean}       asc
 */
function heapSort(arr, asc = true) {
    len = arr.length;

    if (!asc) {
        buildMinHeap(arr);

        console.log(arr);

        for (let i = len - 1; i > 0; i--) {
            swap(arr, 0, i);
            len--;
            heapMin(arr, 0);
        }
    } else {
        buildMaxHeap(arr);

        console.log(arr);
        
        for (let i = len - 1; i > 0; i--) {
            swap(arr, 0, i);
            len--;
            heapMax(arr, 0);
        }
    }

    return arr;
}

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
 * 构建大顶堆
 * @param {Array<number>} arr 数组
 */
function buildMaxHeap(arr) {
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        heapMax(arr, i);
    }
}

function buildMinHeap(arr) {
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        heapMin(arr, i);
    }
}

function heapMin(arr, i) {
    let left = 2 * i + 1,
        right = 2 * i + 2,
        minIndex = i;

    if (right < len && arr[right] < arr[minIndex]) {
        minIndex = right;
    }

    if (left < len && arr[left] < arr[minIndex]) {
        minIndex = left;
    }

    if (minIndex !== i) {
        swap(arr, i, minIndex);
        heapMin(arr, minIndex);
    }
}

/**
 * 堆位置的调整
 * @param {Array<number>} arr 数组
 * @param {Number}        i   当前需要调整的位置
 */
function heapMax(arr, i) {
    let left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        swap(arr, i, largest);
        heapMax(arr, largest);
    }
}

console.log(heapSort([5, 2, 7, 3, 6, 1, 4]));
console.log(heapSort([5, 2, 7, 3, 6, 1, 4], false));

/**
 * 大顶堆算法：[5, 2, 7, 3, 6, 1, 4]
 * 1. 构建大顶堆
 * 		
 * 
 *
 *
 *
 */
