// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/description/
// 1450. Number of Students Doing Homework at a Given Time

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
  return startTime.filter((t, i) => queryTime >= t && queryTime <= endTime[i]).length;  
};

console.log(busyStudent([1,2,3], [3,2,7], 4));
// Output: 1
console.log(busyStudent([4], [4], 4));
// Output: 1
console.log(busyStudent([1,2,7], [2,2,8], 4));
// Output: 0
console.log(busyStudent([1,2,3], [12,22,18], 4));
// Output: 3
console.log(busyStudent([], [], 4));
// Output: 0
console.log(busyStudent([1], [], 4));
// Output: 0
console.log(busyStudent([], [4], 4));
// Output: 0
