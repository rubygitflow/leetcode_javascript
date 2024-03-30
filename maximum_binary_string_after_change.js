// https://leetcode.com/problems/maximum-binary-string-after-change/description/
// 1702. Maximum Binary String After Change

// You can apply each of the following operations any number of times:
// Operation 1: If the number contains the substring "00", you can replace it with "10".
// For example, "00010" -> "10010"
// Operation 2: If the number contains the substring "10", you can replace it with "01".
// For example, "00010" -> "00001"

/**
 * @param {string} binary
 * @return {string}
 */
var maximumBinaryString = function(binary) {
    let c_first_ones = 0,
        c_zeros = 0,
        l = binary.length;
    while (c_first_ones<l && binary[c_first_ones]==='1') c_first_ones+=1
    for (let i = 0; i < l; i++) {
        if (binary[i]==='0') c_zeros+=1
    }
    // The solution formula
    return '1'.repeat(c_first_ones)+
           '1'.repeat(c_zeros>0 ? c_zeros-1 : 0)+
           '0'.repeat(c_zeros>0 ? 1 : 0)+
           '1'.repeat(l-c_first_ones-c_zeros)
};

console.log(maximumBinaryString('000110'));
// Output: "111011"
console.log(maximumBinaryString('01'));
// Output: "01"
console.log(maximumBinaryString('1101011'));
// Output: "1110111"
console.log(maximumBinaryString('0000'));
// Output: "1110"
console.log(maximumBinaryString('1111'));
// Output: "1111"
