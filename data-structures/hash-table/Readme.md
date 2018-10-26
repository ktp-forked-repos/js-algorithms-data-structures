# Hash Table

A hash table is a data structure that is used to store keys/value pairs. It uses a hash function to compute an index 
into an array in which an element will be inserted or searched. By using a good hash function, hashing can work well.
Under reasonable assumptions, the average time required to search for an element in a hash table is O(1).

## Methods

- [x] `hash()`: Hash function.
- [x] `put()`: Add element to table with key.
- [x] `get()`: Get element by key.
- [x] `has()`: Check whether key is exist or not
- [x] `remove()`: Remove element by key.



## Complexity

#### Time Complexity

| Methods      | Average Case | Worst Case  |
| :----------: | :---------:  | :----------:|  
| `put()`      | O(1)         | O(n)        |
| `get()`      | O(1)         | O(n)        |
| `has()`      | O(1)         | O(n)        | 
| `remove()`   | O(1)         | O(n)        |    



## Good to Know

### Applications

- *Associative arrays:* Hash tables are commonly used to implement many types of in-memory tables. They are used to 
implement associative arrays (arrays whose indices are arbitrary strings or other complicated objects).

- *Database indexing:* Hash tables may also be used as disk-based data structures and database indices (such as in dbm).

- *Caches:* Hash tables can be used to implement caches i.e. auxiliary data tables that are used to speed up the access
 to data, which is primarily stored in slower media.

- *Object representation:* Several dynamic languages, such as Perl, Python, JavaScript, and Ruby use hash tables to 
implement objects.

- Hash Functions are used in various algorithms to make their computing faster


## References

- [HackerEarth](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)