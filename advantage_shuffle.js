// https://leetcode.com/problems/advantage-shuffle/description/
// 870. Advantage Shuffle
//|HRD|

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
    let ord = Uint16Array.from({length:nums2.length}, (_,i) => i),
        output = new Uint32Array(nums2.length),
        i = 0, j = nums2.length - 1
    ord.sort((a,b) => nums2[b] - nums2[a])
    // console.log(ord)
    nums1.sort((a,b) => b - a)
    // console.log(nums1)
    for (let ix of ord) {
        output[ix] = nums1[i] > nums2[ix] ? nums1[i++] : nums1[j--]
        // console.log(output)
    }
    return output
};

console.log(advantageCount([2,7,11,15], [1,10,4,11]));
// Output: [2,11,7,15]
console.log(advantageCount([12,24,8,32], [13,25,32,11]));
// Output: [24,32,8,12]
