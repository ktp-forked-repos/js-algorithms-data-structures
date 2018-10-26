# Queue

A queue is a conceptional structure consisting of a set of homogeneous elements and is based on the principle of first
in first out (FIFO). It is a commonly used abstract data type with two major operations, namely `enQueue` and `deQueue`.
enQueue and deQueue are carried out on the bottommost element, which is the item  added firstly to the queue.
The enQueue operation adds an element to the queue while the pop operation removes an element from the bottom position.
The queue concept is used in programming and memory organization in computers.


## PlayGround
You can check out the [live demo](https://repl.it/@IlkinHuseynoff/Data-Structure-Queue) to explore source code and play around with it. 


## Methods

- [x] `enQueue()`: Add element to the bottom of the queue.
- [x] `deQueue()`: Remove bottommost element and return it.
- [x] `peek()`: Get the bottommost element of the queue.
- [x] `isEmpty()`: Check if queue is empty.


## Complexity

#### Time Complexity

| Methods      | Complexity |  
| :----------: | :----------------: |  
| `enQueue()`  |      O(1)          |  
| `deQueue()`  |      O(1)          |  

 


## Good to Know

### Applications
Applications of Queue data structure

- Queue is useful in CPU scheduling, Disk Scheduling. When multiple processes require CPU at the same time, 
various CPU scheduling algorithms are used which are implemented using Queue data structure.

- When data is transferred asynchronously between two processes. Queue is used for synchronization.
Examples: IO Buffers, pipes, file IO, etc.

- In print spooling, documents are loaded into a buffer and then the printer pulls them off the buffer at its own rate.
Spooling also lets you place a number of print jobs on a queue instead of waiting for each one to finish before 
specifying the next one.

- Breadth First search in a Graph. It is an algorithm for traversing or searching graph data structures.It starts at 
some arbitrary node of a graph and explores the neighbor nodes first, before moving to the next level neighbors.

- Handling of interrupts in real-time systems. The interrupts are handled in the same order as they arrive, 
First come first served.

- In real life, Call Center phone systems will use Queues, to hold people calling them in an order, until a service 
representative is free.


## References

- [Quora](https://www.quora.com/What-are-the-applications-of-queues)