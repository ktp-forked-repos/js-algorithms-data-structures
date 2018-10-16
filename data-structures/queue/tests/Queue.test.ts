
import {Queue} from "../src/Queue";

/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/16/18, 18:03
 **/

describe("Queue", () => {

    it("should create empty queue", () => {
        const queue = new Queue();

        expect(queue.toString()).toBe("");
        expect(queue.isEmpty()).toBeTruthy();

    });

    it("should add element to the queue", () => {
        const queue = new Queue();

        queue.enQueue("BMW");
        queue.enQueue("Audi");
        queue.enQueue("Mercedes");


        expect(queue.isEmpty()).toBeFalsy();
    });

    it("should remove element and return it", () => {
        const queue = new Queue();

        queue.enQueue("BMW");
        queue.enQueue("Audi");
        queue.enQueue("Mercedes");

        let removed = queue.deQueue();

        expect(removed).toBe("BMW");
        expect(queue.isEmpty()).toBeFalsy();


        removed = queue.deQueue();
        expect(removed).toBe("Audi");
        expect(queue.isEmpty()).toBeFalsy();

        removed = queue.deQueue();
        expect(removed).toBe("Mercedes");
        expect(queue.isEmpty()).toBeTruthy();
        expect(queue.toString()).toBe("");

    });

    it("should get top data element of the stack", () => {
        const queue = new Queue();

        queue.enQueue("BMW");
        queue.enQueue("Audi");
        queue.enQueue("Mercedes");

        let peeked = queue.peek();
        expect(peeked).toBe("BMW");
        expect(queue.isEmpty()).toBeFalsy();
    });


});