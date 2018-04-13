// Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

// Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number n, return if n new flowers can be planted in it without violating the no-adjacent-flowers rule.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: True
// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: False
// Note:
// The input array won't violate no-adjacent-flowers rule.
// The input array size is in the range of [1, 20000].
// n is a non-negative integer which won't exceed the input array size.

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let size = flowerbed.length;
    let count = n;
    let prev = 0;
    let i = 0;
    
    while(i < size) {
        if( count === 0) return true;
        else if( flowerbed[i] === 1) i += 2;
        else if( flowerbed[i] === 0 && ( i+1 >= size || (i+1 < size && flowerbed[i+1] === 0)) ) {
            flowerbed[i] = 1;
            i += 2;
            count--;
        } else i++;
    }
    
    return count === 0;
};