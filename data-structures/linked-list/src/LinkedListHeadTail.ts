/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/15/18, 15:37
 **/

import {Node} from "./Node";
import {LinkedListInterface} from "./LinkedListInterface";


export class LinkedListHeadTail implements LinkedListInterface {

    protected head: Node | null;
    protected tail: Node | null;
    protected size: number;

    /**
     * @constructor
     */
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    /**
     * Add element to the beginning of the list.
     *
     * @description First create a node with data. Second, check if list is empty, if so head and tail should point to
     * the newly created node. Otherwise, next element of new node should be equal to current head and head now
     * should point to the new node.
     *
     * @complexity O(1)
     *
     * @param data
     */
    pushFront(data: any): void {

        // Create new node with element
        let newNode = new Node(data);


        if (this.head == null) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.size++;
    }

    /**
     * Remove front element and return value of it
     *
     * @description If head is null that means list is empty, so return null. If head and tail is equal that means
     * there is only 1 element in the list so, both of them should be null. Otherwise head should point to the next
     * element of the removed head.
     *
     * @complexity O(1)
     * @return Node
     */
    popFront(): any | null {
        if (this.head == null) {
            return null;
        }


        let removed = this.head.data;
        if (this.head == this.tail) {
            this.tail = null;
            this.head = null;
        } else {
            this.head = this.head.next;
        }

        this.size--;
        return removed;
    }

    /**
     * Return value of front element
     *
     * @description Check if head isn't null then return value of head. Otherwise, return null.
     *
     * @return {any | null}
     */
    getFront(): any | null {
        return this.head ? this.head.data : null;
    }

    /**
     * Add element to the end of the list
     *
     * @description First create a node with data. Second, check if head is null,
     * if so list is empty therefore head and tail should point to the newly created node.
     * Otherwise, both next pointers of tail and tail itself should be equal to  the new node.
     *
     * @complexity O(1)
     *
     * @param data
     */
    pushBack(data: any) {
        const newNode = new Node(data);

        if (this.head == null) {
            this.head = this.tail = newNode;
        } else {
            this.tail = this.tail.next = newNode;
        }

        this.size++;

    }

    /**
     * Remove end element and return value of it
     *
     * @description If head is equal to null that means list is empty so return null.
     * If head and tail is equal that means there is only one element in the list, therefore
     * both of them should be equal to null. Otherwise iterate list to find node before last node
     * because last node will be deleted. Then modify next value of founded node to null and value of tail
     * to founded node.
     *
     * @complexity O(n)
     * @return Node
     */
    popBack(): Node | null {
        let headPointer = this.head;

        if (headPointer == null) {
            return null;
        }

        if (headPointer == this.tail) {
            this.head = this.tail = null;
            this.size--;
            return headPointer.data;
        }

        while (headPointer.next.next != null) {
            headPointer = headPointer.next;
        }

        let removed = headPointer.next;

        headPointer.next = null;
        this.tail = headPointer;

        this.size--;
        return removed.data;
    }

    /**
     *  Return value of end element
     *
     * @description Check if tail isn't null then return value of tail. Otherwise, return null.
     *
     * @complexity O(1)
     *
     * @return any
     */
    getBack(): any | null {
        return this.tail ? this.tail.data : null;
    }

    /**
     * Remove node by value.
     *
     * @description If searching value is equal to value of head, then remove head.
     * If searching value is equal to value of tail, then remove tail.
     * Otherwise iterate list and stop at the node which's next value is searching one,
     * in other word, stop on the node that is one before of deleted one. Then next pointer
     * of stopped node should be equal to the next pointer of deleted one.
     *
     * @complexity O(n)
     *
     * @param value - Node value looking for removing.
     * @return {boolean}
     */
    removeByValue(value: any): boolean {
        if (this.head.data === value) {
            this.popFront();
            return true;
        }

        if (this.tail.data === value) {
            this.popBack();
            return true;
        }

        let headPointer = this.head;

        while (headPointer.next != null) {
            if (headPointer.next.data === value) {
                headPointer.next = headPointer.next.next;
                this.size--;
                return true;
            }
            headPointer = headPointer.next;
        }
        return false;
    }

    /**
     * Return number of elements in the linked list
     *
     * @complexity O(1)
     * @return number
     */
    getSize(): number {
        return this.size;
    }

    /**
     * Check whether list is empty or not?
     *
     * @description If size of list is equal to 0, then list is empty.
     *
     * @complexity O(1)
     *
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.size == 0;
    }

    /**
     * Return list as an array
     *
     * @description Iterate the list and add node to an array
     *
     * @complexity O(n)
     *
     * @return {any[]}
     */
    toArray(): any[] {
        let arr = [];
        let currentPointer = this.head;
        while (currentPointer) {
            arr.push(currentPointer);
            currentPointer = currentPointer.next;
        }
        return arr;
    }

    /**
     * Return list as a string
     *
     * @description Create new array with value of nodes data based on array created by toArray() function and convert it
     * to the string using build-in toString() method.
     *
     *
     * @return {string}
     */
    toString(): string {
        return this.toArray().map(node => node.data).toString();
    }

}