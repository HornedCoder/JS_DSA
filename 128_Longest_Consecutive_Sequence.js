/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    const setNums = new Set(nums)
    let longest = 0;
    for (let n of setNums){
        if(!setNums.has(n-1)){
            var length = 1;
            while (setNums.has(n+length)){
                length += 1;
            }
            longest = Math.max(length, longest) 
        }

    }
    return longest;
};
