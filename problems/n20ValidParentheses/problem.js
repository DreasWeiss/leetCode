// #1
// var isValid = function(s) {
//     let left = [];
//     for(let i = 0 ; i < s.length; i++) {
//         if(/[(|{|[]/g.test(s[i])){
//             left.push(s[i]);
//         } else if (s[i] === ')' && left.length > 0 && left[left.length-1] === '(') {
//             left.pop();
//         } else if (s[i] === '}' && left.length > 0 && left[left.length-1] === '{') {
//             left.pop();
//         } else if (s[i] === ']' && left.length > 0 && left[left.length-1] === '[') {
//             left.pop();
//         } else {
//             return false;
//         }
//     }
//     return left.length == 0;
// };


// #2
var isValid = function(s) {
    const stack = [];
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (const char of s) {
        if (bracketMap[char]) {
            stack.push(char);
        } else { 
            const lastBracket = stack.pop();
            if (char !== bracketMap[lastBracket]) {
                return false; 
            }
        }
    }
    return stack.length === 0; 
};


console.log(isValid(')')); //false
console.log(isValid('()')); //true
console.log(isValid('()[]{}')); //true
console.log(isValid('(]')); //false