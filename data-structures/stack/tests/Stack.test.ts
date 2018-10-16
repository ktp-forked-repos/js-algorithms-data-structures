/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/16/18, 15:14
 **/
import {Stack} from "../src/Stack";


describe("Stack", () => {

    it("should create empty stack", () => {
        const stack = new Stack();

        expect(stack.toString()).toBe("");
        expect(stack.isEmpty()).toBeTruthy();

    });

    it("should add element to the stack", () => {
        const stack = new Stack();

        stack.push("BMW");
        stack.push("Audi");
        stack.push("Mercedes");


        expect(stack.isEmpty()).toBeFalsy();
    });

    it("should remove element and return it", () => {
        const stack = new Stack();

        stack.push("BMW");
        stack.push("Audi");
        stack.push("Mercedes");

        let removed = stack.pop();

        expect(removed).toBe("Mercedes");
        expect(stack.isEmpty()).toBeFalsy();


        removed = stack.pop();
        expect(removed).toBe("Audi");
        expect(stack.isEmpty()).toBeFalsy();

        removed = stack.pop();
        expect(removed).toBe("BMW");
        expect(stack.isEmpty()).toBeTruthy();
        expect(stack.toString()).toBe("");

    });

    it("should get top data element of the stack", () => {
        const stack = new Stack();

        stack.push("BMW");
        stack.push("Audi");
        stack.push("Mercedes");

        let peeked = stack.peek();
        expect(peeked).toBe("Mercedes");
        expect(stack.isEmpty()).toBeFalsy();
    });


});