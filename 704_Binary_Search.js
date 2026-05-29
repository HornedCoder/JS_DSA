/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var bs = function(l,r){
        if (l > r){
            return -1;
        }

        const m = Math.trunc((r-l)/2);
        const mid = m+l;
        if (nums[mid] === target){
            return mid;
        }
        else{
            if (nums[mid]< target){
                return bs(mid+1, r);
            }
            else{
                return bs(l, mid-1)
            }
        }
    }
    return bs(0, nums.length-1);
};
