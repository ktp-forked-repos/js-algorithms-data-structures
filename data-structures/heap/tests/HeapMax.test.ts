/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/18/18, 23:44
 **/
import {HeapMax} from "../src/HeapMax";

describe("Heap Max", () => {


    it("should create an empty heap", () => {
        let heap = new HeapMax();

        expect(heap.toString()).toBe("");

    });


    it("should create heap tree", () => {

        let heap = new HeapMax();
        heap.add(15);
        heap.add(9);
        heap.add(6);
        heap.add(10);
        heap.add(3);
        heap.add(8);
        heap.add(9);

        expect(heap.toString()).toBe("15,10,9,9,3,6,8");

    });


    it("should remove root element from heap ", () => {

        let heap = new HeapMax();
        heap.add(15);
        heap.add(9);
        heap.add(6);
        heap.add(10);
        heap.add(3);
        heap.add(8);
        heap.add(9);

        expect(heap.peek()).toBe(15);

        heap.poll();

        expect(heap.peek()).toBe(10);  

        expect(heap.toString()).toBe("10,9,9,8,3,6");


    });


});