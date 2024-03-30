// https://leetcode.com/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/description/
// 1604. Alert Using Same Key-Card Three or More Times in a One Hour Period

/**
 * @param {string[]} keyName
 * @param {string[]} keyTime
 * @return {string[]}
 */
var alertNames = function(keyName, keyTime) {
    let map = new Map(),
        names = [];
    keyName.forEach((name, i) => {
        let arr = map.get(name);
        if (!arr) {
            arr = [];
            map.set(name, arr);
        }
        let [x, y] = keyTime[i].split(':');
        arr.push(x * 60 + +y);
    })
    return [...map.keys()]
        .filter((name, i) =>
            map.get(name)
                .sort((a, b) => a - b)
                .some((time, i, times) => time - times[i - 2] <= 60)
        )
        .sort()
};

console.log(alertNames(
  ["daniel","daniel","daniel","luis","luis","luis","luis"],
  ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
));
// Output: ["daniel"]
console.log(alertNames(
  ["alice","alice","alice","bob","bob","bob","bob"],
  ["12:01","12:00","18:00","21:00","21:20","21:30","23:00"]
));
// Output: ["bob"]
