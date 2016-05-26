/**
 * @param {number} n
 * @return {number}
 */ 

// 7 => 3 + 4 = 12
// 8 => 3 + 3 + 2 = 18
// 9 => 3 + 3 + 3 = 27
// 10 => 3 + 3 + 4 = 36
// 11 = > 3 + 3 + 3 + 2 = 54

var integerBreak = function(n) {
    var result = 1;
    
    if (n === 2) {
        return 1;
    }
    
    if (n === 3) {
        return 2;
    }
    
    if (n === 4) {
        return 4;
    }
    
    while (n > 0) {
        
        if (n === 4) {
            result *= 4;
            n -= 4;
        } else if ((n - 3) >= 0) {
            result *= 3;
            n -= 3;
        } else if ((n - 2) >= 0){
            result *=2;
            n -= 2;
        } else {
            result *= 1;
            n -= 1;
        }
    }
    
    return result;
};