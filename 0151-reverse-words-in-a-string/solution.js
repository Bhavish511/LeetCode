/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s
        .trim() // Remove space form both sides
        .split(/\s+/) // spilts words
        .reverse() // reverse them
        .join(" "); // join as sentence
};
