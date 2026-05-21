var MinStack = function() {
    this.stack = [];
};

MinStack.prototype.push = function(val) {
    if (this.stack.length === 0) {
        // If it's the first element, it is intrinsically the minimum
        this.stack.push({ value: val, min: val });
    } else {
        // Otherwise, compare the new value to the previous minimum
        const previousMin = this.stack[this.stack.length - 1].min;
        this.stack.push({ 
            value: val, 
            min: Math.min(val, previousMin) 
        });
    }
};

MinStack.prototype.pop = function() {
    this.stack.pop();
};

MinStack.prototype.top = function() {
    // Return just the value property of the top object
    return this.stack[this.stack.length - 1].value;
};

MinStack.prototype.getMin = function() {
    // Return just the min property of the top object
    return this.stack[this.stack.length - 1].min;
};
