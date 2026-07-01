/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    var l = 0;
    var r = nums.length-1;

    while (l <= r){
        let mid = Math.floor((l+r) /2);


        if (target === nums[mid]) return mid;

        //Check if left half is sorted.
        if (nums[l] <= nums[mid]){
            if( target>= nums[l]  && target < nums[mid] ){
                r = mid-1;
            }
            else{
                l = mid+1
            }
        }
        //Otherwise right half is sorted
        else{
            if (target > nums[mid] && target <= nums[r]){
                l = mid+1;
            }
            else{
                r = mid-1
            }
        }
    }
    return -1
};
