// https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/description/
// 1744. Can You Eat Your Favorite Candy on Your Favorite Day?

/**
 * @param {number[]} candiesCount
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canEat = function(candiesCount, queries) {
  let candies_acc = [0, ...candiesCount];
  for (let i = 1; i <= candiesCount.length; i++) candies_acc[i] += candies_acc[i - 1];

  // const out = Array(queries.length).fill(false);
  // for (let i = 0; i < queries.length; i++) {
  //   const [favorite_type, favorite_day, daily_cap] = queries[i];
  //   out[i] = (favorite_day < candies_acc[favorite_type + 1] &&
  //       candies_acc[favorite_type] < (favorite_day + 1) * daily_cap);
  // }
  // return out;

  return queries.map(([favorite_type, favorite_day, daily_cap]) => {
    return (favorite_day < candies_acc[favorite_type + 1] &&
      candies_acc[favorite_type] < (favorite_day + 1) * daily_cap);
  });
};

console.log(canEat([7,4,5,3,8], [[0,2,2],[4,2,4],[2,13,1000000000]]));
// Output: [true,false,true]
console.log(canEat([5,2,6,4,1], [[3,1,2],[4,10,3],[3,10,100],[4,100,30],[1,3,1]]));
// Output: [false,true,true,false,false]
console.log(canEat([7,4,5,3], [[0, 2, 2], [1, 6, 1], [2, 5, 10]]));
// Output: [true, false, true]
