/**
 * 插入排序
 * 时间复杂度：平均 O(n^2)、最坏 O(n^2)
 * 空间复杂度: O(1), 稳定
 * 实现方法：
 * 		插入排序是重复的将新的元素插入一个排好序的子线性表中，直到整个线性表排好序。
 *      插入排序是在一个已经有序的小序列的基础上，一次插入一个元素。
 *      当然，刚开始这个有序的小序列只有1个元素，就是第一个元素。
 *      比较是从有序序列的末尾开始，也就是想要插入的元素和已经有序的最大者开始比起，如果比它大则直接插入在其后面，否则一直往前找直到找到它该插入的位置......
 * @param {Array<number>} arr
 * @param {boolean}       asc
 */
function insertSort(arr, asc = true) {
    for (let i = 1, n = arr.length; i < n; i++) {
        const cValue = arr[i]; // 需要插入元素的值，索引为i
        let j = i - 1; // 有序表最后一个元素的位置

        // 遍历有序表，找到cValue的插入位置，同时把大于cValue的元素后移一位
        for (; j >= 0 && (asc ? arr[j] > cValue : arr[j] < cValue); j--) {
            arr[j + 1] = arr[j];
        }

        // 把元素赋值到有序表中合适的位置
        arr[j + 1] = cValue;
    }

    return arr;
}

console.log(insertSort([9, 5, 6, 7, 4, 3, 2]));
console.log(insertSort([9, 5, 6, 7, 4, 3, 2], false));

// [9, 5, 6, 7, 4, 3, 2]
// i : 1
// 第一次：j = i - 1 = 0
// 比较 arr[j] > arr[i] = 9 > 5 = true
// arr[j+1] = arr[j] => [9, 9, 6, 7, 4, 3, 2], j = -1
// arr[j+1] = arr[i] => arr[0] = arr[1] => arr[0] = 5 => [5, 9, 6, 7, 4, 3, 2]
