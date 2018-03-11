// We define a harmonious array is an array where the difference between its maximum value and its minimum value is exactly 1.
//
// Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.
//
// Example 1:
// Input: [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].
// Note: The length of the input array will not exceed 20,000.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let map = new Map();
    let set = new Set(nums.sort((a,b) => a-b));
    let size = nums.length;
    let max = 0;

    for(let i=0; size>i; i++) {
        if(map.get(nums[i]) == undefined)
            map.set(nums[i], 1);
        else
            map.set(nums[i], map.get(nums[i]) + 1);
    }

    let prev;
    set.forEach((item) => {
        if(prev == undefined) prev = item;
        else if(prev + 1 == item){
            max = Math.max(map.get(prev) + map.get(item), max);
            prev = item;
        } else prev = item;
    });

    return max;
};
