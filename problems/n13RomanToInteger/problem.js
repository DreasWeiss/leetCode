const d = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D' : 500,
    'M' : 1000,

}

var romanToInt = function(s) {
    let array = [...s].map(i=>i=d[i]);
    let count = 0;
    for (let i =0; i < array.length; i++ ) {
        let n1 = array[i];
        if (i < array.length-1) {
            let n2 = array[i+1];
            if (n1 >= n2) {
                count += n1
            } else {
                count += n2 - n1;
                i++
            } 
        } else {
            count += n1
        }
    }
    return count; 
}

console.log(romanToInt('III')); // 3
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994