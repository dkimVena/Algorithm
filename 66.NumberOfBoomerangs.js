// Given n points in the plane that are all pairwise distinct,
// a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance
// between i and k (the order of the tuple matters).
//
// Find the number of boomerangs. You may assume that n will be at most 500 and
// coordinates of points are all in the range [-10000, 10000] (inclusive).
//
// Example:
// Input:
// [[0,0],[1,0],[2,0]]
//
// Output:
// 2
//
// Explanation:
// The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var len = points.length;
    var count = 0;

    for(var i = 0; i < len; i ++){
        var map = new Map();
        for(var jk = 0; jk < len; jk ++){
            if(i === jk){
                continue;
            }
            var d = getDistance(points[i], points[jk]);
            if(map.get(d)){
                map.set(d, map.get(d) + 1);
            }else{
                map.set(d, 1);
            }
        }
        map.forEach(function(m){
            count += m*(m - 1);
        });
    }

    return count;
};

function getDistance(i, j){
    return (i[0] - j[0])*(i[0] - j[0]) + (i[1] - j[1])*(i[1] - j[1]);
}
