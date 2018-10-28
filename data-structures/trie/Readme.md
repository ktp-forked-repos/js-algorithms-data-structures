# Trie
In computer science, a trie, also called digital tree, radix tree or prefix tree is a kind of search tree—an ordered
tree data structure used to store a dynamic set or associative array where the keys are usually strings. Unlike a binary
search tree, no node in the tree stores the key associated with that node; instead, its position in the tree defines the
key with which it is associated. All the descendants of a node have a common prefix of the string associated with that
node, and the root is associated with the empty string. Keys tend to be associated with leaves, though some inner nodes
may correspond to keys of interest.
 

## PlayGround
You can check out the [live demo](https://repl.it/@IlkinHuseynoff/Data-Structure-Trie) to explore source code and play around with it. 


## Methods

- [x] `insert()`: Insert word to the trie.
- [x] `contains()`: Check whether trie contains the word.
- [x] `remove()`: Remove word from the trie.
 

## Complexity


#### Time Complexity

The time complexity of making a trie depends heavily on the representation of the language being stored in the trie.
Small changes to a language's alphabetic representation can have a large impact on both storage and operation time
complexity.

Here are the worst-case times, where `m` is the length of the longest word, and `n`  is the number of words in the trie.
`a` is the length of the word you are searching for. Note that to change these times to the average or best case, you
would simply swap out `m` for the average length of word or the length of the shortest word, respectively.

Each operation is predicated on the complexity of the contains operation. Anything from creating the trie to searching
it later to deleting an element will require you to perform `m` lookup on each of the `n` words.




| Methods      | Complexity |  
| :----------: | :--------: |  
| `insert()`   | O(a∙n)     |  
| `contains()` | O(a∙n)     |  
| `remove()`   | O(a∙n)     |  

## Good to Know

#### Overview
A trie is, like other tree-based data structures, made up of a set of nodes connected by pointers. These pointers indicate a parent-child relationship between the nodes. Parents are above their children in the tree. Typically the root node of the tree is an "empty" node so that it can point to all members of the alphabet the trie is using to store.

Unlike other tree-based data structure like the AVL tree, the trie is not necessarily balanced. It is totally dependent on the contents of the tree.

#### Applications

1. **Auto Complete**:
    - Auto Complete functionality is used widely in mobile apps and text editors. Trie is an efficient data structure
    widely used for its implementation. Trie provides an easy way to search for the possible dictionary words to complete word. 

2. **Spell Checkers**
    - Spell checking is a three-step process. Check if a word is in a dictionary, generate potential suggestions, and then sort the suggestions–hopefully with the intended word on top.
      Tries can be used to store that dictionary and by searching the words over the data structure one can easily implement a spell checker in the most efficient way. Using trie not only the lookup for a word into the dictionary becomes easy but an algorithm to provide the list of valid words or suggestions can be easily constructed.

3. **Network browser history**
    - A network browser keeps a history of the URLs of sites that you have visited. By organizing this history as a trie, the user need only type the prefix of a previously used URL and the browser can complete the URL.

4. **Automatic Command completion**
    - When using an operating system such as Unix, we type in system commands to accomplish certain tasks. For example
    to see the list of commands `(ls /usr/bin/ps*)` having prefix ps can be auto-suggested by just pressing tab.
   
      

## References
- [Wikipedia](https://en.wikipedia.org/wiki/Trie)
- [Brilliant](https://brilliant.org/wiki/tries/)
- [Xebia](http://blog.xebia.in/index.php/2015/09/28/applications-of-trie-data-structure/)