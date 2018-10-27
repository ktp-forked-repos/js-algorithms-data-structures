# Priority Queue

Priority queue is an abstract data type. 
It is similar to queue where we insert an element from the back and remove an element from front, but with a one 
difference that the logical order of elements in the priority queue depends on the priority of the elements. The element
with highest priority will be moved to the front of the queue and one with lowest priority will move to the back of the 
queue. Thus it is possible that when you enqueue an element at the back in the queue, it can move to front because of 
its highest priority.




## PlayGround
You can check out the [live demo](https://repl.it/@IlkinHuseynoff/Data-Structure-Priority-Queue) to explore source code and play around with it. 


## Methods

- [x] `insert()`: Add element with priority.
- [x] `extract()`: Extracts element with the highest priority.
- [x] `getMax()`: Get element with the highest priority.
- [ ] `remove()`: Remove element.
- [ ] `changePriority()`: Change priority of the element.
- [x] `isEmpty()`: Check if queue is empty.


## Complexity

#### Time Complexity

| Methods             |  Complexity |  
| :----------------:  | :---------: |  
| `insert()`          | O(log n)    |  
| `extract()`         | O(log n)    |  
| `getMax()`          | O(1)        |  
| `remove()`          | O(log n)    |  
| `changePriority()`  | O(log n)    |  

## Good to Know

### Applications

1. **Djikstra's Algroithm**: finding a shortest path in a graph

2. **Prim's Algorithm** : constructing a minimum spanning tree of graph

3. **Huffman's algorithm**: constructing an optimum prefix-free encoding of a string

4. **Heap Sort**: sorting a given sequence


## References
