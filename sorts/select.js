/**
 * 选择排序
 * 时间复杂度：平均 O(n^2)、最坏 O(n^2)
 * 空间复杂度: O(1), 不稳定
 * 实现方法：
 * 		选择排序是给每个位置选择当前元素最小的，比如给第一个位置选择最小的，
 * 		在剩余元素里面给第二个元素选择最小的，依次类推，直到第n-1个元素，第n个元素不用选择了，因为只剩下它一个最大的元素了。
 * @param {Array<number>} arr 需要排序的数组
 * @param {boolean}       asc 是否正序
 */
function selectSort(arr, asc = true) {
    for (let i = 0, n = arr.length; i < n; i++) {
        let indexOfMin = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[asc ? j : indexOfMin] < arr[asc ? indexOfMin : j]) {
                indexOfMin = j;
            }
        }

		// 如果当前数不是最小的，则交换位置
        if (indexOfMin !== i) {
            const temp = arr[indexOfMin];

            arr[indexOfMin] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}

console.log(selectSort([9, 5, 6, 7, 4, 3, 2]));
console.log(selectSort([9, 5, 6, 7, 4, 3, 2], false));
