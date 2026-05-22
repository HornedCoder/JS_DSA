/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];

    function backtrack(openCount, closeCount, curr){
        if (curr.length === 2*n){
            result.push(curr);
        }

        if (openCount < n){
            backtrack(openCount+1, closeCount, curr+'(')
        }

        if (closeCount < openCount){
            backtrack(openCount, closeCount +1, curr+')')
        }
    }

    backtrack(0,0,"");
    return result;
};
