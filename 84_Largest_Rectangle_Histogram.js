/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0); //This is important to make algo work.
    const stack = []; // stores [index, height]
    const heightsMap = [...heights.entries()];
    maxArea =  0;
    for (const [i, h] of heightsMap){
        var start = i;
        while (stack.length > 0 && stack[stack.length-1][1] > h){
            let popped = stack.pop();
            maxArea = Math.max(maxArea , popped[1]* (i-popped[0]));
            start = popped[0];
        }
        stack.push([start,h]);
    }
    return maxArea;
    
};
