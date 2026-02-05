/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let Finalmax = nums[0];

    for(let i = 1; i < nums.length; i++) {

        currentSum = Math.max(nums[i], currentSum + nums[i]);

        Finalmax = Math.max(Finalmax, currentSum);
    }
    return Finalmax;
};
