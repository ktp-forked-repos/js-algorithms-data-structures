# Heap

A Binary Heap is a Binary Tree with following properties.
1) It’s a complete tree (All levels are completely filled except possibly the last level and the last level has all keys as left as possible).
 This property of Binary Heap makes them suitable to be stored in an array.

2) A Binary Heap is either Min Heap or Max Heap. In a Min Binary Heap, the key at root must be minimum among all keys 
present in Binary Heap. The same property must be recursively true for all nodes in Binary Tree. Max Binary Heap is 
similar to MinHeap.

## Methods

- [x] `add()`: Add element to the heap.
- [x] `poll()`: Remove root element and return it.
- [x] `peek()`: Get the root element of the heap.
- [x] `isEmpty()`: Check if heap is empty.


## Complexity

#### Time Complexity

| Methods      | Complexity |  
| :----------: | :--------: |  
| `add()`      | O(n)       |  
| `poll()`     | O(n)       |  
| `peek()`     | O(1)       |  

## Good to Know

### Applications of Heaps:

1) Heap Sort: Heap Sort uses Binary Heap to sort an array in O(n*log(n)) time.

2) Priority Queue: Priority queues can be efficiently implemented using Binary Heap because it supports insert(), delete() and extractmax(), decreaseKey() operations in O(logn) time. Binomoial Heap and Fibonacci Heap are variations of Binary Heap. These variations perform union also efficiently.

3) Graph Algorithms: The priority queues are especially used in Graph Algorithms like Dijkstra’s Shortest Path and Prim’s Minimum Spanning Tree.

4) Many problems can be efficiently solved using Heaps. For example:
    - K’th Largest Element in an array.
    - Sort an almost sorted array
    - Merge K Sorted Arrays.


## References
- [GeeksforGeeks](https://www.geeksforgeeks.org/binary-heap/)