# Linked List


In computer science, a linked list is a linear collection of data elements, whose order is not given by their physical 
placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes 
which together represent a sequence. In its most basic form, each node contains data and a reference
(in other words, a link) to the next node in the sequence. This structure allows for efficient insertion or removal of 
elements from any position in the sequence during iteration. More complex variants add additional links, allowing more 
efficient insertion or removal of nodes at arbitrary positions. A drawback of linked lists is that access time is linear
(and difficult to pipeline). Faster access, such as random access, is not feasible. Arrays have better cache locality 
compared to linked lists.

![Linked List](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)


## PlayGround
You can check out the [live demo](https://repl.it/@IlkinHuseynoff/Data-Structure-Linked-List) to explore source code and play around with it. 


## Methods

- [x] `pushFront()`: add element to the front of the list
- [x] `popFront()`: remove front element and return value
- [x] `getFront()`: return value of front element
- [x] `pushBack()`: add an element to the end of the list
- [x] `popBack()`: remove back element and return its value
- [x] `getBack()`: return value of end element
- [x] `removeByValue()`: remove node from list by value
- [x] `size()`: return number of elements in the list
- [x] `isEmpty()`: check whether list is empty or not
- [x] `toArray()`: return list as an array
- [x] `toString()`: return list as a string (for testing purpose)

 
 
## Good to Know

### Array vs Linked List

 
<table>
<tbody><tr><th>ARRAY</th><th>LINKED LIST</th></tr>
<tr><td>Array is a collection of elements of similar data type.</td><td>Linked List is an ordered collection of elements of same type, which are connected to each other using pointers.</td></tr>
<tr><td><p>Array supports <b>Random Access</b>, which means elements can be accessed directly using their index, like <code>arr[0]</code> for 1st element, <code>arr[6]</code> for 7th element etc.</p><p>Hence, accessing elements in an array is <b>fast</b> with a constant time complexity of <code>O(1)</code>.</p></td><td><p>Linked List supports <b>Sequential Access</b>, which means to access any element/node in a linked list, we have to sequentially traverse the complete linked list, up to that element.</p> <p>To access <b>nth</b> element of a linked list, time complexity is <code>O(n)</code>.</p></td></tr>
<tr><td><p>In an array, elements are stored in <b>contiguous memory location</b> or consecutive manner in the memory.</p></td><td><p>In a linked list, new elements can be stored anywhere in the memory.</p><p>Address of the memory location allocated to the new element is stored in the previous node of linked list, hence forming a link between the two nodes/elements.</p></td></tr>
<tr><td>In array, <b>Insertion and Deletion</b> operation takes more time, as the memory locations are consecutive and fixed.</td><td><p>In case of linked list, a new element is stored at the first free and available memory location, with only a single overhead step of storing the address of memory location in the previous node of linked list.</p><p>Insertion and Deletion operations are <b>fast</b> in linked list.</p></td></tr>
<tr><td>Memory is allocated as soon as the array is declared, at <b>compile time</b>. It's also known as <b>Static Memory Allocation</b>.</td><td>Memory is allocated at <b>runtime</b>, as and when a new node is added. It's also known as <b>Dynamic Memory Allocation</b>.</td></tr>
<tr><td>In array, each element is independent and can be accessed using its index value.</td><td>In case of a linked list, each node/element points to the next, previous, or maybe both nodes.</td></tr>
<tr><td>Array can <b>single dimensional</b>, <b>two dimensional</b> or <b>multidimensional</b></td><td>Linked list can be <b>Linear(Singly)</b>, <b>Doubly</b> or <b>Circular</b> linked list.</td></tr>
<tr><td>Size of the array must be specified at the time of array declaration.</td><td>Size of a Linked list is variable. It grows at runtime, as more nodes are added to it.</td></tr>
<tr><td>Array gets memory allocated in the <b>Stack</b> section.</td><td>Whereas, linked list gets memory allocated in <b>Heap</b> section.</td></tr>
</tbody></table>


## Complexities
### Time Complexity

| Methods           | One Pointer (Head) | Two Pointer (Head and Tai) | 
| :---------------: | :------------:     | :-------------------------: |       
| `pushFront()`     |      O(1)          | O(1)                        |     
| `popFront()`      |      O(1)          | O(1)                        |     
| `getFront()`      |      O(1)          | O(1)                        |     
| `pushBack()`      |      O(n)          | O(1)                        |     
| `popBack()`       |      O(n)          | O(n)                        |     
| `getBack()`       |      O(n)          | O(1)                        |     
| `removeByValue()` |      O(n)          | O(n)                        |     
 

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list#Singly_linked_list)
- [StudyToNight](https://www.studytonight.com/data-structures/linked-list-vs-array)