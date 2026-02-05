function removeElement(nums: number[], val: number): number {
    const filtered = nums.filter(x => x !== val);
    nums.splice(0, nums.length, ...filtered); 
    return filtered.length;
};
