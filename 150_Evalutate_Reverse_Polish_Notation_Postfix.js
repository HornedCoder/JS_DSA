/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operator = new Set(['+', '-', '*', '/']);
    const stack = [];
    for (let i of tokens){
        if (!operator.has(i)){
            stack.push(Number(i))
        }
        else{
            const b = stack.pop();
            const a = stack.pop();

            switch(i){
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    result = Math.trunc(a / b);
                    break;
            }
            stack.push(result);
        }
    }
    return Number(stack[0])
};
