/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var l = 0;
    var r = nums.length-1;
    while (l < r){
        let mid = Math.floor((l+r)/2);

        if (nums[mid] > nums[r]){
            l = mid+1;
        }
        else{
            r = mid;
        }
    }
    return nums[l];
}  
