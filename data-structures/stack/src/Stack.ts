/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/16/18, 14:52
 **/
import {LinkedListHeadTail} from "../../linked-list/src/LinkedListHeadTail";

export class Stack {

    private linkedLIst: LinkedListHeadTail;
    private size: number;

    /**
     * @constructor
     */
    constructor() {
        this.linkedLIst = new LinkedListHeadTail();
        this.size = -1;
    }

    /**
     * Add element to the top of the stack
     *
     * @complexity O(1)
     * @param element
     */
    push(element: any): void {
        this.linkedLIst.pushFront(element);
        this.size++;
    }

    /**
     * Remove top element and return it.
     *
     * @complexity O(1)
     * @return {any | null}
     */
    pop(): any | null {
        if (this.size >= 0) {
            this.size--;
        }
        return this.linkedLIst.popFront();
    }

    /**
     * Get the top element of the stack.
     *
     * @complexity O(1)
     * @return {any | null}
     */
    peek(): any | null {
        return this.linkedLIst.getFront();
    }

    /**
     * Check whether stack is empty or not
     *
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.size <= -1;
    }

    /**
     * Return stack as a list
     *
     * @return {string}
     */
    toString(): string {
        return this.linkedLIst.toString();
    }

}