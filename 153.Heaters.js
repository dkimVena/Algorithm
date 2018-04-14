// Winter is coming! Your first job during the contest is to design a standard heater with fixed warm radius to warm all the houses.

// Now, you are given positions of houses and heaters on a horizontal line, 
// find out minimum radius of heaters so that all houses could be covered by those heaters.

// So, your input will be the positions of houses and heaters seperately, 
// and your expected output will be the minimum radius standard of heaters.

// Note:
// Numbers of houses and heaters you are given are non-negative and will not exceed 25000.
// Positions of houses and heaters you are given are non-negative and will not exceed 10^9.
// As long as a house is in the heaters' warm radius range, it can be warmed.
// All the heaters follow your radius standard and the warm radius will the same.
// Example 1:
// Input: [1,2,3],[2]
// Output: 1
// Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.
// Example 2:
// Input: [1,2,3,4],[1,4]
// Output: 1
// Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed.

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    houses.sort((a,b) => a-b);
    heaters.sort((a,b) => a-b);
    
    let result = 0;
    let lenHouse = houses.length;
    let lenHeater = heaters.length;
    
    for(let hs = 0; lenHouse>hs; hs++){
        let leftHt = -1;
        let rightHt = -1;
        
        for(let ht = 0; lenHeater>ht; ht++){
            if (heaters[ht] <= houses[hs])
                leftHt = houses[hs] - heaters[ht];
            if (heaters[lenHeater - 1 - ht] >= houses[hs])
                rightHt = heaters[lenHeater - 1 - ht] - houses[hs]; 
        }
        
        if (leftHt == -1) leftHt = Number.MAX_VALUE;
        if (rightHt == -1) rightHt = Number.MAX_VALUE;
        
        result = Math.max(result, Math.min(leftHt, rightHt)); 
    }

    return result;
};