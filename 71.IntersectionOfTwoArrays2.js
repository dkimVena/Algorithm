// Given two arrays, write a function to compute their intersection.
//
// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
//
// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var result = [];
    var size1 = nums1.length;
    var size2 = nums2.length;
    var map = new Map();

    for(var i=0; size1>i; i++) {
        map.set(nums1[i], map.get(nums1[i]) + 1 || 1);
    }

    for(var i=0; size2>i; i++) {
        if(map.get(nums2[i]) > 0) {
            result.push(nums2[i]);
            map.set(nums2[i], map.get(nums2[i]) - 1);
        }
    }

    return result;
};
