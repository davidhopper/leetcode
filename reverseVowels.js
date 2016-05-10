var reverseVowels = function(s) {
    var vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        I: true,
        O: true,
        U: true
    };
    var start = 0;
    var end = s.length-1;
    var temp;
    s = s.split('');

    while (start < end) {
        if (vowels[s[start]] && vowels[s[end]]) {
            temp = s[start];
            s[start] = s[end];
            s[end] = temp;
            
            start += 1;
            end -= 1;
        } else if (!vowels[s[start]]) {
            start += 1;
        } else if (!vowels[s[end]]) {
            end -= 1;
        } else {
            start += 1;
            end -= 1;
        }
    }
    
    return s.join("");
};

console.log(reverseVowels("leetcode"));