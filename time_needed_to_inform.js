// https://leetcode.com/problems/time-needed-to-inform-all-employees/description/
// 1376. Time Needed to Inform All Employees

/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let team = new Object();;
    for(let i = 0; i < n; i++) {
        if(team[manager[i]] === undefined) team[manager[i]] = []
        team[manager[i]].push(i);
    }
    function dfs(emp, team, informTime) {
        output = 0
        if(team[emp] !== undefined) {
            for(let j = 0; j < team[emp].length; j++) {
                output = Math.max(output, dfs(team[emp][j], team, informTime) + informTime[emp])
            }
        }
        return output
    }
    return dfs(headID, team, informTime)
};


console.log(numOfMinutes(1, 0, [-1], [0]));
// Output: 0
console.log(numOfMinutes(6, 2, [2,2,-1,2,2,2], [0,0,1,0,0,0]));
// Output: 1
console.log(numOfMinutes(9, 2, [2,2,-1,2,2,2,3,4,5], [0,0,1,2,2,1,1,1,1]));
// Output: 3
