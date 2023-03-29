/**
 * @param {number} x
 * @return {boolean}
 */

// #1
// var isPalindrome = function(x) {
//     return +x.toString().split('').reverse().join('') === x;
// };


// #2
// Follow up: Could you solve it without converting the integer to a string?
var isPalindrome = function (x) {
    if (x < 0) return false;
    let num = x;
    let revNum = 0;
    while (x > 0) {
        let d = x % 10;
        revNum = (revNum * 10) + d;
        x = Math.floor(x / 10);
    }
    return num === revNum
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
