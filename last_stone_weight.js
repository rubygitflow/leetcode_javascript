// https://leetcode.com/problems/last-stone-weight/description/
// 1046. Last Stone Weight

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    function remove_max() {
        let val =  Math.max(...stones);
        let pos = stones.indexOf(val);
        stones.splice(pos, 1);
        return val
    };
    while(stones.length>1){
        let u = remove_max()
        let v = remove_max()
        if (u > v) stones.unshift(u - v)
    }
    return stones[0] ? stones[0] : 0
};

console.log('Last Stone Weight');
console.log(lastStoneWeight([2,7,4,1,8,2]));
// Output: 0
console.log(lastStoneWeight([2,7,4,1,8,1]));
// Output: 1
console.log(lastStoneWeight([1]));
// Output: 1
console.log(lastStoneWeight([31,26,33,21,40]));
// Output: 9
