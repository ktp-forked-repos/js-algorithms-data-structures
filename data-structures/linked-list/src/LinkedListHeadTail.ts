/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/15/18, 15:37
 **/

import {Node} from "./Node";
import {LinkedListInterface} from "./LinkedListInterface";


export class LinkedListHeadTail implements LinkedListInterface {

    private head: Node | null;
    private tail: Node | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    /**
     *  Add element to the beginning of the list
     *
     * @param data
     * @complexity O(1)
     */
    pushFront(data: any): void {

        // Create new node with element
        let newNode = new Node(data);

        /**
         *   If list is empty then head and tail should point to the newly created node.
         *   Otherwise, next element of new node should be equal to current head element
         *   and head now should  point to the new node.
         */
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
     * @complexity O(1)
     * @return Node
     */
    popFront(): Node | null {

        // If there is not any element in the list return null
        if (this.head == null) {
            return null;
        }

        /**
         *  If there is only 1 element in the list then tail and head should be equal.
         *  Therefore, both of them should be null, otherwise Head should be point to
         *  next element of the removed head
         */
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
     *  Return value of front element
     *
     * @complexity O(1)
     * @return any | null
     */
    getFront(): any | null {
        return this.head ? this.head.data : null;
    }

    /**
     *  Add element to the end of the list
     *
     * @param data
     * @complexity O(1)
     */
    pushBack(data: any) {

        // Create new node with element
        const newNode = new Node(data);

        /**
         *   If list is empty then head and tail should point to the newly created node.
         *   Otherwise, both next element of tail and tail should be equal to new node
         */
        if (this.head == null) {
            this.head = this.tail
        } else {
            this.tail = this.tail.next = newNode;
        }

    }

    /**
     * Remove end element and return value of it
     *
     * @complexity O(n)
     * @return Node
     */
    popBack(): Node | null {
        let headPointer = this.head;

        // If there is not any element in the list return null
        if (headPointer == null) {
            return null;
        }

        /**
         *  If there is only 1 element in the list then tail and head should be equal each-other.
         *  Therefore, both of them should be null
         */
        if (headPointer == this.tail) {
            this.head = this.tail = null;
            this.size--;
            return headPointer.data;
        }

        while (headPointer.next != this.tail) {
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
     * @complexity O(1)
     * @return any
     */
    getBack(): any | null {
        return this.tail ? this.tail.data : null;
    }


    /**
     * Remove node by value
     *
     * @complexity O(n)
     * @param value
     * @return boolean
     */
    removeByValue(value: any): boolean {
        let removed = false;

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
                removed = true;
                break;
            }
            headPointer = headPointer.next;
        }
        return removed;
    }

    /**
     * Return number of elements in the linked list
     * @complexity O(1)
     * @return number
     */
    getSize(): number {
        return this.size;
    }

    /**
     * Return true | false
     * @complexity O(1)
     * @return boolean
     */
    isEmpty(): boolean {
        return this.size == 0;
    }

    /**
     *  Iterate the list and add value of nodes to array
     * @complexity O(n)
     *  @return arr
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
     *  Return list as string
     *  @complexity O(n)
     * @return string
     */
    toString(): string {
        return this.toArray().map(node => node.data).toString();
    }


}