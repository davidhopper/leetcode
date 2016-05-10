/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
  // find longest suffix
    // "aaa"
  // find longest prefix
  
  // "aacecaaa"
  var prefixCount = 0;
  var suffixCount = s.length-1;
  var prefix = "";
  var suffix;
  var newHalf = "";
  
  while(prefixCount < suffixCount) {
      // find longest suffix
      suffix = s[suffixCount];
      
      for (var i = suffixCount; i >= prefixCount; i -= 1) {
        if(s[suffixCount] === s[suffixCount-1]) {
            suffix += s[suffixCount-1];
            suffixCount -= 1;
        } else {
            suffixCount -= 1;
            break;
        }
      }

      // find the longest prefix
      prefix = s[prefixCount];

      for (var j = prefixCount; j < suffixCount; j += 1) {
        if(s[prefixCount] === s[prefixCount+1]) {
          prefix += s[prefixCount+1];
          prefixCount += 1;
        } else {
          prefixCount += 1;
          break;
        }
      }

      // compare suffix to prefix

        // where they are not equal build newHalf to eventually concat to the s


  }
//   return newHalf + s;
};

console.log(shortestPalindrome("aaacecaa"));