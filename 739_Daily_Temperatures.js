/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stored = [...temperatures.entries()]; // stores [index, temperatures[index]]
    const ans = new Array(temperatures.length).fill(0);
    const stack = [];

    for (const [index, currTemp] of stored ){
         while (stack.length > 0  && currTemp > stack[stack.length-1][1]){
            const popped = stack.pop();
            ans[popped[0]] = index - popped[0];
         }
         stack.push([index, currTemp]);
    }
    return ans
};
