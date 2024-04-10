// https://leetcode.com/problems/binary-search/description/
// 704. Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid
        // left direction
        if(target < nums[mid]) r = mid - 1
        // right direction
        else l = mid + 1
    }
    return -1
};

console.log('Binary Search');
console.log(search([-1,0,3,5,9,12], 9));
// Output: 4
console.log(search([-1,0,3,5,9,12], 2));
// Output: -1

// ======================
// https://leetcode.com/problems/search-a-2d-matrix/description/
// 74. Search a 2D Matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let l = 0
    let r = matrix.length - 1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let last_pos = matrix[mid].length - 1
        if(matrix[mid][0] == target || matrix[mid].slice(-1) == target) return true
        if(matrix[mid][0] < target && matrix[mid].slice(-1) > target){
            let res = search(matrix[mid], target)
            return res > -1 ? true : false
        }
        // left direction
        if(matrix[mid][0] > target) r = mid - 1
        // right direction
        else l = mid + 1
    }
    return false
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrixEx = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let l = 0, r = m * n - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        let mid_val = matrix[Math.floor(mid / n)][mid % n];

        if (mid_val === target)
            return true;
        else if (mid_val < target)
            l = mid + 1;
        else
            r = mid - 1;
    }
    return false;
};

console.log('Search a 2D Matrix');
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));
// Output: false
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 23));
// Output: true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 34));
// Output: true

console.log(searchMatrixEx([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));
// Output: false
console.log(searchMatrixEx([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 23));
// Output: true
console.log(searchMatrixEx([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 34));
// Output: true
