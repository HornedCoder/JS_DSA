/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;
    const ans = new Array(n).fill(1);

    // Step 1: Prefix ans[i] contains product of all elements left of i.
    let prefix = 1;
    for (let i =0; i< n; i++){
        ans[i] = prefix;
        prefix *= nums[i];
    }

    // Step 2: Suffix contains the product of all elements to the right of i.
    let suffix = 1;
    for (let i =n-1; i>=0; i--){
        ans[i] *= suffix;
        suffix *= nums[i];
    }

    return ans;
};
