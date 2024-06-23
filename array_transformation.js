// https://leetcode.com/problems/array-transformation/description/
// 1243. Array Transformation


/**
 * @param {number[]} arr
 * @return {number[]}
 */
var transformArray = function(arr) {
  let transformable = true;
  while (transformable){
    transformable = false
    const t = [...arr];
    for (let i = 1; i < t.length-1 ; i++) {
      if (t[i] > t[i - 1] && t[i] > t[i + 1]) {
        arr[i]--;
        transformable = true;
      } else if (t[i] < t[i - 1] && t[i] < t[i + 1]) {
        arr[i]++;
        transformable = true;
      }
    }
  }
  return arr;
}

console.log(transformArray([6,2,3,4]))
// Output: [6,3,3,4]
console.log(transformArray([1,6,3,4,3,5]))
// Output: [1,4,4,4,4,5]
console.log(transformArray([1,5]))
// Output: [1,5]
