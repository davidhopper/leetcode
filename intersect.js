/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var count1 = {};
    var result = [];
    
    for (var i = 0, length = nums1.length; i < length; i += 1) {
        count1[nums1[i]] = count1[nums1[i]] + 1 || 1;
    }
    
    for (var j = 0, length = nums2.length; j < length; j += 1) {
        if (count1[nums2[j]]) {
            result.push(nums2[j]);
            count1[nums2[j]] -= 1;
        }
    }
    
    return result;
};