/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/27/18, 16:44
 **/
import {PriorityQueue} from "../src/PriorityQueue";

describe("PriorityQueue", () => {


    it("should add element", () => {

        const pQueue = new PriorityQueue();

        pQueue.insert("BMW", 25);
        pQueue.insert("Audi", 10);
        pQueue.insert("Mercedes", 5);
        pQueue.insert("Kia", 2);

        expect(pQueue.getMax()).toBe("BMW");

    });


    it("should remove element",()=>{
        const pQueue = new PriorityQueue();

        pQueue.insert("BMW", 25);
        pQueue.insert("Audi", 10);
        pQueue.insert("Mercedes", 5);
        pQueue.insert("Kia", 2);

        expect(pQueue.getMax()).toBe("BMW");
        expect(pQueue.extract()).toBe("BMW");
        expect(pQueue.isEmpty()).toBeFalsy();

        expect(pQueue.getMax()).toBe("Audi");
        expect(pQueue.extract()).toBe("Audi");
        expect(pQueue.isEmpty()).toBeFalsy();

        expect(pQueue.getMax()).toBe("Mercedes");
        expect(pQueue.extract()).toBe("Mercedes");
        expect(pQueue.isEmpty()).toBeFalsy();

        expect(pQueue.getMax()).toBe("Kia");
        expect(pQueue.extract()).toBe("Kia");


        expect(pQueue.getMax()).toBeNull();
        expect(pQueue.isEmpty()).toBeTruthy();

    });

});