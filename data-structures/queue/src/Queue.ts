/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/16/18, 17:58
 **/
import {LinkedListHeadTail} from "../../linked-list/src/LinkedListHeadTail";

export class Queue {

    private linkedList: LinkedListHeadTail;
    private size: number;


    constructor() {
        this.linkedList = new LinkedListHeadTail();
        this.size = -1;
    }


    /**
     * Add element to the bottom of the queue
     *
     * @param element
     */
    enQueue(element: any): void {

        this.linkedList.pushBack(element);

        this.size++;

    }


    /**
     * Remove top element and return it.
     *
     * @return any | null
     */
    deQueue(): any | null {
        this.linkedList.popFront();
        this.size--;
    }

    /**
     * Get the bottommost element of the queue.
     *
     * @complexity O(1)
     * @return any | null
     */
    peek(): any | null {
        return this.linkedList.getFront();
    }

    /**
     * Check whether queue is empty or not
     *
     * @return boolean
     */
    isEmpty(): boolean {
        return this.size <= -1;
    }

    /**
     * Return queue as a list
     *
     * @return string
     */
    toString(): string {
        return this.linkedList.toString();
    }


}