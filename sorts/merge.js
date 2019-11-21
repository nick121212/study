/**
 * 归并排序
 * 时间复杂度：平均：O(nlogn)、最坏：O(nlogn)
 * 空间复杂度: O(n), 稳定
 * 实现方法：
 * 		把一个数组拆分成若干个有序的数组，在依次两两进行合并
 * 		合并的时候需要有一个临时数组进行存储
 * @param {Array<number>} arr
 * @param {boolean}       asc
 */
function mergeSort(arr, asc = true) {
    const length = arr.length;

    if (length === 1) {
        return arr;
    }

    const mid = Math.floor(length / 2);

    const left = arr.slice(0, mid);
    const right = arr.slice(mid, length);

    return merge(mergeSort(left, asc), mergeSort(right, asc), asc);
}

/**
 * 合并两个数组
 * @param {Array<number>} left    左边的有序数组
 * @param {Array<number>} right   右边的有序数组
 * @param {boolean}       asc     是否正序
 * @returns
 */
function merge(left, right, asc) {
    const result = [];
    let il = 0,
        ir = 0;

	// 进行数组的合并
    while (il < left.length && ir < right.length) {
        if (asc ? left[il] < right[ir] : left[il] > right[ir]) {
            result.push(left[il]);
            il++;
        } else {
            result.push(right[ir]);
            ir++;
        }
    }

    result.push(...left.slice(il));
    result.push(...right.slice(ir));

    return result;
}

console.log(mergeSort([9, 5, 6, 7, 4, 3, 2]));
console.log(mergeSort([9, 5, 6, 7, 4, 3, 2], false));
