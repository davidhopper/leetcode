/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var results = [];
    
    var traverse = function(depth, buildUp) {
        if (depth === nums.length) {
            results.push(buildUp);
            return;
        }
        
        traverse(depth+1, buildUp);
        traverse(depth+1, buildUp.concat(nums[depth]));
    };
    
    traverse(0, []);
    return results;
};