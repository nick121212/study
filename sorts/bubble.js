/**
 * 冒泡排序法
 * 时间复杂度：平均 O(n^2)、最坏 O(n^2)
 * 空间复杂度: O(1), 稳定
 * 实现方法：
 * 		冒泡排序就是把小的元素往前调或者把大的元素往后调。
 * 		比较是相邻的两个元素比较，交换也发生在这两个元素之间。
 * 		如果两个元素相等，不会把他们俩交换，所以相同元素的前后顺序并没有改变，所以冒泡排序是一种稳定排序算法。
 * @param {Array<number>} arr
 * @param {boolean}       asc
 */
function bubbleSort(arr, asc = true) {
    for (let i = 0, n = arr.length; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // 判断是正序还是倒序
            if (arr[asc ? j : j + 1] > arr[asc ? j + 1 : j]) {
                const swap = arr[j];

                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([9, 5, 6, 7, 4, 3, 2]));
console.log(bubbleSort([9, 5, 6, 7, 4, 3, 2], false));
