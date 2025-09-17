/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const trimmed = s.trim()
    const digits = trimmed.match(/^[+-]?\d+/);
    console.log(trimmed);
    let num = Number(digits);
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    if (num > INT_MAX) return INT_MAX;
    if (num < INT_MIN) return INT_MIN;
    return num
};
