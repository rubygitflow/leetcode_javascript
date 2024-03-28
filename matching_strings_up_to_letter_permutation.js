// Matching strings up to letter permutation
// Дан текст T и строка S. Требуется найти подстроку S' в T такую, что она совпадает с S с точностью до перестановки букв.
// В качестве ответа стоит вернуть индекс первого вхождения, или -1, если такая подстрока S' не нашлась.
// ("reebok", "bee") -> 1

/**
 * @param {string} hoststring
 * @param {string} substring
 * @return {number}
 */
var matchSubstring = function(hoststring, substring) {
    function dfs(where_a, stack_a) {
        for(let i = 0; i < where_a.length; i++) {
            const index = stack_a.indexOf(where_a[i]);
            if (index !== -1) {
                stack_a.splice(index, 1);
            } else {
                return false;
            }
        }
        return true;
    }
    const match_len = substring.length,
          host_len = hoststring.length;
    if(match_len > host_len) {
        return -1;
    }
    for(let i = 0; i < host_len - match_len + 1; i++) {
        if (dfs(hoststring.slice(i,i+match_len).split(''), substring.split(''))) {
            return i
        }
    }
    return -1
};

console.log(matchSubstring('reebokee', 'bee'));
// Output: 1
console.log(matchSubstring('colorados', 'dosar'));
// Output: 4
console.log(matchSubstring('reebokee', 'mee'));
// Output: -1
