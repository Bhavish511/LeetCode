/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // const merged = [...nums1,...nums2].sort((a,b)=> a-b);
    // const Arraylength = merged.length;
    // console.log(merged)
    // if(Arraylength % 2 === 1) {

    //     let index = Math.floor(Arraylength/2);
    //     return merged[index];
    // }
    // let index = Math.floor(Arraylength/2);
    // return (merged[index-1]+merged[index])/2;
     if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let m = nums1.length, n = nums2.length;
    let total = m + n;
    let half = Math.floor((total + 1) / 2);

    let left = 0, right = m;

    while (left <= right) {
        let i = Math.floor((left + right) / 2); // partition nums1
        let j = half - i; // partition nums2

        let nums1Left = i > 0 ? nums1[i - 1] : -Infinity;
        let nums1Right = i < m ? nums1[i] : Infinity;
        let nums2Left = j > 0 ? nums2[j - 1] : -Infinity;
        let nums2Right = j < n ? nums2[j] : Infinity;

        if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
            // Found correct partition
            if (total % 2 === 1) {
                return Math.max(nums1Left, nums2Left);
            }
            return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
        } else if (nums1Left > nums2Right) {
            // Too far right in nums1 → move left
            right = i - 1;
        } else {
            // Too far left in nums1 → move right
            left = i + 1;
        }
    }
};
