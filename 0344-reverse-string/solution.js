/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length -1;

    // Not optimized because under the hood array destructing creates an array
    // while(left < right)
    // {
    //     [s[left], s[right]] = [s[right], s[left]];
    //     left ++;
    //     right--;

    // }

    while(left < right)
    {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};
