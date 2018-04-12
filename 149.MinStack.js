// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = [];
    this.topVal = null;
    this.min = Number.MAX_VALUE;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x);
    this.topVal = x;
    if(this.min > x)
        this.min = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let removedVal = this.arr.pop();
    this.topVal = this.arr[this.arr.length - 1];
    
    if(removedVal === this.min) {
        let minNum = Number.MAX_VALUE;
        let size = this.arr.length;
        
        for(let i=0; size>i; i++) {
            if(minNum > this.arr[i]) {
                minNum = this.arr[i];
            }
        }
        this.min = minNum;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.topVal;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 