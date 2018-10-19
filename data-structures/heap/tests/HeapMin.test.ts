/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/19/18, 20:31
 **/


import {HeapMin} from "../src/HeapMin";

describe("Heap Min", () => {


    it("should create an empty heap", () => {
        let heap = new HeapMin();

        expect(heap.toString()).toBe("");

    });


    it("should create heap tree", () => {

        let heap = new HeapMin();
        heap.add(15);
        heap.add(9);
        heap.add(6);
        heap.add(10);
        heap.add(3);
        heap.add(8);
        heap.add(9);

        expect(heap.peek()).toBe(3);
        expect(heap.toString()).toBe("3,6,8,15,10,9,9");

    });


    it("should remove root element from heap ", () => {

        let heap = new HeapMin();
        heap.add(15);
        heap.add(9);
        heap.add(6);
        heap.add(10);
        heap.add(3);
        heap.add(8);
        heap.add(9);



        expect(heap.peek()).toBe(3);

        heap.poll();


        /*

            -3 6 8 15 10 9 9 -> 9 6 8 15 10 9
            9 6 8 15 10  -> 6 9 8 15 10
            6 9 8 15 10 -> 6 9 8 15 10

         */


        // expect(heap.peek()).toBe(6);

        expect(heap.toString()).toBe("6,9,8,15,10,9");


    });


});