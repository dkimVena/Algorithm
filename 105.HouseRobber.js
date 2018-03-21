// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed, 
// the only constraint stopping you from robbing each of them is 
// that adjacent houses have security system connected and it will automatically contact the police 
// if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, 
// determine the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let size = nums.length;
    if(size == 0) return 0;
    
    let d = [];
    d[0] = nums[0];
    d[1] = Math.max(nums[0], nums[1]);
    
    for(let n=2; size>n; n++)
        d[n] = Math.max(nums[n] + d[n-2], d[n-1]);
    
    return d[size-1];
};