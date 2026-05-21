/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const mapP = {')' : '(',
                    '}' : '{',
                    ']' : '['}
    const stack = []
    for (let char of s){
        if (char === '(' || char === '{' || char === '['){
            stack.push(char);
        }

        else{
            const popped = stack.pop();
            if (popped === mapP[char]){
                continue;
            }
            else{
                return false;
            }
        }
    }
    // Earlier I used return true; for last line. This was wrong.
    // Just imagine a string ending with '['. It would push into the stack.
    // And now after the loop ends it would return true even tho the stack is not empty. 
    return stack.length === 0;
};
