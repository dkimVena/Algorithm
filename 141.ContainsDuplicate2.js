// Given an array of integers and an integer k, 
// find out whether there are two distinct indices i and j in the array 
// such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    map = {};
    
    for(let i=0; nums.length>i; i++) {
        if(map[nums[i]] === undefined)
            map[nums[i]] = i;
        else {
            if(i - map[nums[i]] <= k)
                return true;
            else
                map[nums[i]] = i;
        }       
    }
    return false;
};