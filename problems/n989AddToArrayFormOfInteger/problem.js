var addToArrayForm = function (num, k) {
    return (BigInt(num.join('')) + BigInt(k.toString())).toString().split('').map(i => +i);
};

console.log(addToArrayForm([1, 2, 0, 0], 34)); // [1,2,3,4]
console.log(addToArrayForm([2, 7, 4], 181)); // [4,5,5]
console.log(addToArrayForm([2, 1, 5], 806)); // [1,0,2,1]
console.log(addToArrayForm([1, 2, 6, 3, 0, 7, 1, 7, 1, 9, 7, 5, 6, 6, 4, 4, 0, 0, 6, 3], 516));
    // [1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]