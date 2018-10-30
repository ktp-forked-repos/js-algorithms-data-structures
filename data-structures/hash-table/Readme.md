# Hash Table

A hash table is a data structure that is used to store keys/value pairs. It uses a hash function to compute an index 
into an array in which an element will be inserted or searched. By using a good hash function, hashing can work well.
Under reasonable assumptions, the average time required to search for an element in a hash table is O(1).

## PlayGround
You can check out the [live demo](https://repl.it/@IlkinHuseynoff/Data-Structure-Hash-Table) to explore source code and play around with it. 


## Methods

- [x] `hash()`: Hash function.
- [x] `put()`: Add element to table with key.
- [x] `get()`: Get element by key.
- [x] `has()`: Check whether key is exist or not
- [x] `remove()`: Remove element by key.
- [x] `isEmpty()`: Check whether hash table is empty or not.



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


### Collision Handling

Since a hash function gets us a small number for a big key, there is possibility that two keys result in same value. The situation where a newly inserted key maps to an already occupied slot in hash table is called collision and must be handled using some collision handling technique. Following are the ways to handle collisions:

Chaining:The idea is to make each cell of hash table point to a linked list of records that have same hash function value. Chaining is simple, but requires additional memory outside the table.

Open Addressing: In open addressing, all elements are stored in the hash table itself. Each table entry contains either a record or NIL. When searching for an element, we one by one examine table slots until the desired element is found or it is clear that the element is not in the table.



<table>
<thead>
<tr>
<td><strong>Seperate Chaining</strong></td>
<td><strong>Open Addressing</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td>Chaining is Simpler to implement.</td>
<td>Open Addressing requires more computation.</td>
</tr>
<tr>
<td>In chaining, Hash table never fills up, we can always add more elements to chain.</td>
<td>In open addressing, table may become full.</td>
</tr>
<tr>
<td>Chaining is Less sensitive to the hash function or load factors.</td>
<td>Open addressing requires extra care for to avoid clustering and load factor.</td>
</tr>
<tr>
<td>Chaining is mostly used when it is unknown how many and how frequently keys may be inserted or deleted.</td>
<td>Open addressing is used when the frequency and number of keys is known.</td>
</tr>
<tr>
<td>Cache performance of chaining is not good as keys are stored using linked list.</td>
<td>Open addressing provides better cache performance as everything is stored in the same table.</td>
</tr>
<tr>
<td>Wastage of Space (Some Parts of hash table in chaining are never used).</td>
<td>In Open addressing, a slot can be used even if an input doesn’t map to it.</td>
</tr>
<tr>
<td>Chaining uses extra space for links.</td>
<td>No links in Open addressing</td>
</tr>
</tbody>
</table>



### Performance of Open Addressing:

Like Chaining, the performance of hashing can be evaluated under the assumption that each key is equally likely to be hashed to any slot of the table (simple uniform hashing)
```text
m = Number of slots in the hash table
n = Number of keys to be inserted in the hash table

Load factor α = n/m  ( < 1 )
Expected time to search/insert/delete < 1/(1 - α) 

So Search, Insert and Delete take (1/(1 - α)) time
```


## References

- [HackerEarth](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)
- [GeeksforGeeks](https://www.geeksforgeeks.org/hashing-set-3-open-addressing/)