/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/16/18, 09:45
 **/
import {Node} from "./Node";
import {LinkedListInterface} from "./LinkedListInterface";


export class LinkedListHead implements LinkedListInterface {

    private head: Node | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }


    /**
     *  Add element to the beginning of the list
     *
     * @param data
     */
    pushFront(data: any): void {

        let newNode = new Node(data);

        /**
         * If there is an element in the list already, then next pointer of newly created node
         * should be equal to the head and head should point to the new node.
         * If there isn't any element, then head should point new node
         *
         */
        if (this.head != null) {
            newNode.next = this.head;
        }
        this.head = newNode;
        this.size++;
    }

    /**
     * Remove front element and return value of it
     *
     * @return Node
     */
    popFront(): Node | null {

        /**
         * If there isn't any element in the list then return null.
         * Otherwise head should be point to the next element
         *
         */
        if (this.head == null) {
            return null;
        }
        let removed = this.head.data;
        this.head = this.head.next;

        this.size--;
        return removed;
    }

    /**
     *  Return value of front element
     *
     * @return any | null
     */
    getFront(): any | null {
        return this.head ? this.head.data : null;
    }


    /**
     *  Add element to the end of the list
     *
     * @param data
     */
    pushBack(data: any): void {

        if (this.head == null) {
            this.pushFront(data);
            return;
        }

        let newNode = new Node(data);
        let pointer = this.head;
        while (pointer.next != null) {
            pointer = pointer.next;
        }

        pointer.next = newNode;

        this.size++;

    }


    /**
     * Remove end element and return value of it
     *
     * @return Node
     */
    popBack(): Node | null {

        let pointer = this.head;

        // If there is not any element in the list return null
        if (pointer == null) {
            return null;
        }

        if (pointer.next == null) {
            return this.popFront();
        }

        while (pointer != null) {
            if (pointer.next.next == null) {
                break;
            }
            pointer = pointer.next;
        }
        let removed = pointer.next;
        pointer.next = null;

        this.size--;
        return removed.data;
    }

    /**
     *  Return value of end element
     *
     * @return any
     */
    getBack(): any | null {

        if (this.head == null) {
            return null;
        }

        let pointer = this.head;
        while (pointer.next != null) {
            pointer = pointer.next;
        }

        return pointer.data;
    }

    /**
     * Remove node by value
     *
     * @param value
     * @return boolean
     */
    removeByValue(value: any): boolean {

        if (this.head.data == value) {
            this.popFront();
            return true;
        }
        let pointer = this.head;
        while (pointer.next != null) {
            if (pointer.next.data == value) {
                pointer.next = pointer.next.next;
                return true;
            }
            pointer = pointer.next;
        }
        return false;
    }


    /**
     * Return number of elements in the linked list
     *
     * @return number
     */
    getSize(): number {
        return this.size;
    }

    /**
     * Return true | false
     *
     * @return boolean
     */
    isEmpty(): boolean {
        return this.size == 0;
    }

    /**
     *  Iterate the list and add value of nodes to array
     *
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
     * @return string
     */
    toString(): string {
        return this.toArray().map(node => node.data).toString();
    }


}