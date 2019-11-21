/**
 * 快速排序法
 * 时间复杂度：平均 O(n^2)、最坏 O(n^2)
 * 空间复杂度: O(1), 稳定
 * 实现方法：
 * 		在数组中选择一个基准元素（pivot），将数组分为两部分，使得第一部分中的所有元素都小于等于pivot，
 * 		第二部分的所有元素都大于pivot。对第一部分递归的应用快速排序算法，然后对第二部分递归的应用快速排序算法
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
