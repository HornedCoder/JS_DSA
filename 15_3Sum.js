/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // Correct numerical sort for JavaScript
    nums.sort((a, b) => a - b); 
    const n = nums.length;
    const ans = [];

    for (let i = 0; i < n - 2; i++) {
        // Skip duplicate starting numbers to avoid duplicate triplets
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const currSum = nums[i] + nums[left] + nums[right];

            if (currSum === 0) {
                ans.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for the left pointer
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                // Skip duplicates for the right pointer
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                // Step past the duplicates to prevent infinite loops
                left++;
                right--;
                
            } else if (currSum < 0) {
                // Sum is too small, move left pointer up to increase it
                left++;
            } else {
                // Sum is too large, move right pointer down to decrease it
                right--;
            }
        }
    }

    return ans;
};
