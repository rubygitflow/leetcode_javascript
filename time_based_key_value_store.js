// https://leetcode.com/problems/time-based-key-value-store/
// 981. Time Based Key-Value Store
// Look at binary_search.js

var TimeMap = function() {
    this.store = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    const store = this.store;
    if (!store.has(key)) store.set(key, []);
    store.get(key).push([timestamp, value]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    const bs_sourse = this.store.get(key) || [];
    let output = "";
    if (!bs_sourse.length) return output;
    let [l, r] = [0, bs_sourse.length - 1];
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const [t, v] = bs_sourse[mid];
        if (timestamp === t) return v;
        // right direction
        if (timestamp >= t) {
            l = mid + 1;
            output = v;
        // left direction
        } else r = mid - 1;
    }
    return output;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
var obj = new TimeMap()
var commands = ["get", "set", "get", "get", "set", "get", "get", "get", "get"]
var resources = [["foo", 1], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5], ["foo", 2], ["too", 1]]
// Output
// ["", undefined, "bar", "bar", undefined, "bar2", "bar2", "bar", ""]
for(let i=0; i<commands.length; i++){
    const com = commands[i];
          inp = resources[i];
    if (com == 'set'){
        output = obj.set(inp[0],inp[1],inp[2])
        console.log(output)
    } else {
        param_2 = obj.get(inp[0],inp[1])
        console.log(param_2)
    }
}
