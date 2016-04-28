var summaryRanges = function(nums) {
    var result = [];
    var tempRun = "" + nums[0];
    var i;
    
    if (nums.length === 0) {
        return result;
    }

    if (nums.length === 1) {
        result.push(tempRun);
        return result;
    }

    if (nums.length === 2) {
        if ((nums[1] - nums[0]) !== 1) {
            result.push(tempRun);
            tempRun = "" + nums[1];
            result.push(tempRun);
            return result;
        } else {
            tempRun += "->" + nums[1];
            result.push(tempRun);
            return result;
        }
    }

    for (i = 1; i < nums.length; i+=1) {
        if ((nums[i] - nums[i-1]) !== 1 && parseInt(tempRun) !== nums[i-1]) {
            // console.log(tempRun[0]);
            // console.log(parseInt(tempRun[0], 10), nums[i-1]);

            tempRun += "->" + nums[i-1];
            // console.log(nums[i]);
            result.push(tempRun);
            tempRun = "" + nums[i];
            // console.log(tempRun);
        } else if ((nums[i] - nums[i-1]) !== 1) {
            result.push(tempRun);
            tempRun = "" + nums[i];
        }
    }
    if (nums[nums.length-1] - nums[nums.length-2] === 1) {
        tempRun += "->" + nums[nums.length-1];
    }

    result.push(tempRun);
    return result;
};

console.log(summaryRanges([0,1,2,4,5,7,9,10,12,14,15,16,27,28]));
console.log(summaryRanges([0,1,2]));
console.log(summaryRanges([-2147483648,-2147483647,2147483647]));
console.log(summaryRanges([-1]));
console.log(summaryRanges([0,1]));
console.log(summaryRanges([0,1,2,4,5,7]));