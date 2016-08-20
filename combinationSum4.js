/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  var totalCombinations = 0;

  var findCombinations = function(currSum) {
    if (currSum > target) {
      return;
    }

    if (currSum === target) {
      totalCombinations += 1;
      return;
    }

    var i, len = nums.length;

    for (i = 0; i < len; i+=1) {
      findCombinations(currSum+nums[i]);
    }
  };
  findCombinations(0);
  return totalCombinations;
};

