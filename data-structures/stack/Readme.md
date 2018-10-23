# Stack

Stack is an abstract data type and a data structure that follows LIFO (last in first out) strategy. It means the element
added last will be removed first. Stack allows two operations `push` and `pop`. Push adds an element at the top of the stack
and pop removes an element from top of the stack.


## PlayGround
You can check out the [live demo](https://repl.it/@IlkinHuseynoff/Data-Structure-Stack) to explore source code and play around with it. 


## Methods

- [x] `push()`: Add element to the top of the stack.
- [x] `pop()`: Remove top element and return it.
- [x] `peek()`: Get the top element of the stack.
- [x] `isEmpty()`: Check if stack is empty.


## Complexity

#### Time Complexity

| Methods      | Complexity |  
| :----------: | :----------------: |  
| `push()`     |      O(1)          |  
| `pop()`      |      O(1)          |  
| `peek()`     |      O(1)          |  
 
 

## Good to Know

### Application of Stack

##### Expression Conversion

An expression can be represented in prefix, postfix or infix notation. Stack can be used to convert one form of expression to another.
##### Syntax Parsing

Many compilers use a stack for parsing the syntax of expressions, program blocks etc. before translating into low level code.
 
##### Backtracking

Suppose we are finding a path for solving maze problem. We choose a path and after following it we realize that it is wrong.
Now we need to go back to the beginning of the path to start with new path. This can be done with the help of stack.
 
##### Parenthesis Checking

Stack is used to check the proper opening and closing of parenthesis.


##### String Reversal

Stack is used to reverse a string. We push the characters of string one by one into stack and then pop character from stack.

## References

- [TheCrazyProgrammer](https://www.thecrazyprogrammer.com/2016/04/applications-of-stack.html)