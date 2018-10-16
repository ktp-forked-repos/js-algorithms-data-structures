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


    constructor() {
        this.linkedLIst = new LinkedListHeadTail();
        this.size = -1;
    }


    /**
     * Add element to the stack
     * @complexity O(n)
     * @param element
     */
    push(element): void {
        this.linkedLIst.pushBack(element);

        this.size++;
    }


    /**
     *
     * @return any | null
     */
    pop(): any | null {
        if (this.size >= 0) {
            this.size--;
        }
        return this.linkedLIst.popBack();
    }

    /**
     *
     * @return any | null
     */
    peek(): any | null {
        return this.linkedLIst.getBack();
    }

    /**
     * Check whether stack is empty or not
     *
     * @return boolean
     */
    isEmpty(): boolean {
        return this.size <= 0;
    }

    toString() {
        return this.linkedLIst.toString();
    }

}