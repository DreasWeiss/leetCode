/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,n,...nums2);
    return nums1.sort((a,b)=>a-b);
};


//nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
// [1,2,2,3,5,6]

// nums1 = [1], m = 1, nums2 = [], n = 0
console.log(merge([1], 1, [], 0));
// [1]

// nums1 = [0], m = 0, nums2 = [1], n = 1
console.log(merge([0], 0, [1], 1));
// [1]
