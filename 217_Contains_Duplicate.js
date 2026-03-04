/**
 * @param {number[]} nums
 * @return {boolean}
 */

//Create a set of the given array and if there size is same then no duplicats.
var containsDuplicate = function(nums) {
    const newSet = new Set(nums)
    const newSetLength = newSet.size;
    const numsLength = nums.length;

    if (newSetLength != numsLength){
        return true;
    }
    else{
        return false;
    }
    
};
