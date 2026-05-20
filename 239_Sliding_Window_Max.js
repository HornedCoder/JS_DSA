/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const result = [];
    const deque = []; // Stores indices of elements.

    for (let r=0; r< nums.length; r++){
        //1. Remove indices which are out of curr window.
        if (deque.length >0 && deque[0] < r-k+1){
            deque.shift(); // Remove from front
        }

        //2. Remove element from back that are smaller than current element.
        while(deque.length >0 && nums[deque[deque.length-1]] <= nums[r]){
            deque.pop();
        }

        //3. Add the currnet element's index in the back.
        deque.push(r);

        //4. If window size is reached append the max element
        if (r >= k-1){
            result.push(nums[deque[0]]);
        }

    }
    return result
};
