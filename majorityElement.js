/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var eleCount = {};
    var i,
        ele,
        len = nums.length,
        majority = len/2;
    
    for (i=0; i<len; i+=1) {
        eleCount[nums[i]] = eleCount[nums[i]] + 1 || 1;
    }
    
    for (ele in eleCount) {
        if (eleCount[ele] > majority) {
            return parseInt(ele);
        }
    }
};