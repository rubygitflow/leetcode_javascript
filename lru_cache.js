// https://leetcode.com/problems/lru-cache/description/
// 146. LRU Cache
// Least Recently Used (LRU) cache

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;
    };

    /** 
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) return -1;

        const v = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, v);
        return this.cache.get(key);
    };

    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
          this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
          this.cache.delete(this.cache.keys().next().value);  // keys().next().value returns first item's key
        }
    };
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(2)
commands = ["put", "put", "get", "put", "get", "put", "get", "get", "get"]
resources = [[1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [undefined, undefined, 1, undefined, -1, undefined, -1, 3, 4]

for(let i=0; i<commands.length; i++){
    const com = commands[i];
          inp = resources[i];
    if (com == 'put'){
        output = obj.put(inp[0],inp[1])
        console.log(output)
    } else {
        param_2 = obj.get(inp[0])
        console.log(param_2)
    }
};
