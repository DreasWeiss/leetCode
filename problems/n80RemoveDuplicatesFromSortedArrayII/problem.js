/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let l = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i]!==nums[i+2]){
            nums[l]=nums[i];
            l++;
        }
    }
    return l;
};


console.log(removeDuplicates([1]));
// 1, nums = [1]

console.log(removeDuplicates([1,1,1,2,2,3]));
// 5, nums = [1,1,2,2,3,_]

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
// 5, nums = 7, nums = [0,0,1,1,2,3,3,_,_]

