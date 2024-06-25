/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let s = init;
    for ( let i =0; i<nums.length; i++){
        s = fn(s,nums[i])
    }
    return s;
};

console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0)); //10
console.log(reduce([1,2,3,4], function sum(accum, curr) { return accum + curr * curr; }, 100)); //130
console.log(reduce([], function sum(accum, curr) { return accum + curr * curr; }, 25)); //25
