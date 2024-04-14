// https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/description/
// 982. Triples with Bitwise AND Equal To Zero

/**
 * @param {number[]} nums
 * @return {number}
 */
var countTriplets = function(nums) {
    let cnt = new Map(),
        output = 0; 
    for(const x of nums)
      for(const y of nums)
        cnt.set(x&y, (cnt.get(x&y)||0) + 1);
    const mapIterator = cnt[Symbol.iterator]();
    for(const v of mapIterator)
      for(const z of nums)
        if((v[0]&z) === 0) output+=v[1];
    return output;
};

console.log(countTriplets([2,1,3]));
// Output: 12
console.log(countTriplets([0,0,0]));
// Output: 27
