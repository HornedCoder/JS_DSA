/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var start = 0;
    var end = numbers.length-1;

    while (end > start){
        var sum = numbers[end] + numbers[start]
        if (sum === target){
            return [start+1, end+1]
        }

        if (sum < target){
            start++;
        }
        else{
            end--;
        }
    }
    
};
