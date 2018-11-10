# Binary Search Tree
Binary search tree is a data structure that quickly allows us to maintain a sorted list of numbers.

- It is called a binary tree because each tree node has maximum of two children.
- It is called a search tree because it can be used to search for the presence of a number in `O(log(n))` time.



## PlayGround
You can check out the [live demo](https://repl.it/@IlkinHuseynoff/Data-Structure-Binary-Search-Tree) to explore source code and play around with it. 



## Methods
- [x] `insert()`: add element to the tree
- [x] `contains()`: check whether element exist in the tree
- [ ] `delete()`: delete element from the tree
- [ ] `searchRange()`: search range in the tree
- [x] `isEmpty()`: check whether tree is empty or not


## Complexity

#### Time Complexity

| Methods      | Complexity |  
| :----------: | :--------: |  
| `insert()`   | O(Log(n))  |  
| `contains()` | O(Log(n))  |  
| `delete()`   | O( )       |  


## Good to know

### Binary Search Tree vs Binary Tree
 
- All nodes of left subtree are less than root node
- All nodes of right subtree are more than root node
- Both subtrees of each node are also BSTs i.e. they have the above two properties


## Reference
 - [Programiz](https://www.programiz.com/dsa/breadth-first-search-tree)
