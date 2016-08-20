/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var words = [];
    var temp = "";
    var i;
    var len = str.length;
    
    for (i = 0; i < len; i += 1) {
        if (str[i] !== " ") {
            temp += str[i];
        } else {
            if (temp !== "") {
                words.push(temp);
            }
            temp = "";
        }
    }
    if (temp !== "") {
        words.push(temp);
    }
    
    return words.reverse().join(" ");
};

