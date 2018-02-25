// Suppose Andy and Doris want to choose a restaurant for dinner,
// and they both have a list of favorite restaurants represented by strings.
//
// You need to help them find out their common interest with the least list index sum.
// If there is a choice tie between answers, output all of them with no order requirement.
// You could assume there always exists an answer.
//
// Example 1:
// Input:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".
// Example 2:
// Input:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["KFC", "Shogun", "Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
// Note:
// The length of both lists will be in the range of [1, 1000].
// The length of strings in both lists will be in the range of [1, 30].
// The index is starting from 0 to the list length minus 1.
// No duplicates in both lists.

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    var hashmap ={};
    var result = new Array();
    var returnResult = new Array();
    var index = 0;
    var min;
    var sum;

    list1.map((item, i) => {
        hashmap[item] = i;
    });

    list2.map((item, i) => {
        if(hashmap[item] !== undefined) {
            sum = hashmap[item] + i;
            result[index++] = { sum, item };
        }
    });

    result.sort((a, b) => {
      return a.sum - b.sum;
    });

    returnResult[0] = result[0].item;
    min = result[0].sum;

    for(var i=1; result.length>i; i++) {
        if(min === result[i].sum)
            returnResult[i] = result[i].item;
    }

    return returnResult;
};
