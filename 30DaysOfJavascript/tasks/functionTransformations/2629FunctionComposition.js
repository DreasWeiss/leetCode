/**
 * @param {Function[]} functions
 * @return {Function}
 */
// // #1
// var compose = function(functions) {
    
//     return function(x) {
//         if(functions.length===0) return x;
//         functions.reverse().forEach(f=>x=f(x));
//         return x;
//     }
// };
// // #2
var compose = function (functions) {
    return (x) => {
      for (let i = functions.length - 1; i > -1; i--) {
        x = functions[i](x);
      }
      return x;
    }
  };

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

console.log(compose([x => x + 1, x => x * x, x => 2 * x])(4)); //65
console.log(compose([x => 10 * x, x => 10 * x, x => 10 * x])(1)); //1000
console.log(compose([])(42)); //42