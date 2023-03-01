/**
 * @param {number[]} nums
 * @return {number[]}
 */
// # 1 Cheating
// var sortArray = function (nums) {
//     return nums.sort((a, b) => a - b);
// };



// # 2 Selection Sort (15 / 19 testcases passed)
// function swap(arr, a, b) {
//     let temp = arr[a];
//     arr[a] = arr[b];
//     arr[b] = temp;
// }

// const Compare = {
//     LESS_THAN: -1,
//     BIGGER_THAN: 1
// };

// function defaultCompare(a, b) {
//     if (a === b) {
//         return 0;
//     }
//     return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
// }

// var sortArray = function (nums) {
//     const l = nums.length;
//     let minIdx;

//     for (let i = 0; i < l; i++) {
//         minIdx = i;
//         for (let j = i; j < l; j++) {
//             if (defaultCompare(nums[minIdx], nums[j]) === Compare.BIGGER_THAN) {
//                 minIdx = j;
//             }
//         }
//         if (i !== minIdx) {
//             swap(nums, i, minIdx);
//         }
//     }

//     return nums;
// };


// # 3
function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}

var sortArray = function (nums) {
    return quickSort(nums, 0, nums.length - 1);
};


console.log(sortArray([5, 2, 3, 1])); // [1,2,3,5]
console.log(sortArray([5, 1, 1, 2, 0, 0])); // [0,0,1,1,2,5]