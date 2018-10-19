/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/18/18, 18:52
 **/
import {HeapMax} from "../data-structures/heap/src/HeapMax";
import {HeapMin} from "../data-structures/heap/src/HeapMin";


let heap = new HeapMin();

heap.add(18);
heap.add(10);
heap.add(15);
heap.add(9);
heap.add(10);
heap.add(6);
heap.add(8);
heap.add(5);
heap.add(2);
heap.add(9);
heap.add(7);
heap.add(3);
heap.add(2);
heap.add(4);
heap.add(3);

heap.poll();


console.log(heap.toString());


// 15,10,8,9,10,6,4,5,2,9,7,3,2,3