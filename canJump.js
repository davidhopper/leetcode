/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
var canJump = function(nums) {
    var i;
    var jumpsRemaining = nums[0];
    
    if (nums.length > 1 && jumpsRemaining === 0) {
        return false;
    }

    for (i = 1; i < nums.length-1; i++) {
        jumpsRemaining = Math.max(jumpsRemaining-1, nums[i]);
        
        if (jumpsRemaining === 0) {
           return false;
        }
    }
    return true;
};

console.log(canJump([0])); // true
console.log(canJump([0,1])); // false
console.log(canJump([1,2,0,3])); // true
console.log(canJump([1,1,0,3])); // false
