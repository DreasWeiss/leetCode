/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {
//     let l = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if( i < nums.length - 1 && nums[i] === nums[i+1]) {
//             continue;
//         }
//         nums[l]=nums[i];
//         l++;
//     }
//     return l;
// };


var removeDuplicates = function(nums) {
    let l = 1;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] !== nums[l - 1]) {
            nums[l] = nums[i];
            l++;
        }
    }
    return l
};


console.log(removeDuplicates([1,1,2])); // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); //5