/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/16/18, 09:45
 **/
import {Node} from "./Node";
import {LinkedListInterface} from "./LinkedListInterface";


export class LinkedListHead implements LinkedListInterface {

    protected head: Node | null;
    private size: number;

    /**
     * @constructor
     */
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * Add element to the beginning of the list
     *
     * @description First create a node with data. Second, check if there is an element in the list already,
     * if so next pointer of created node should be equal to the head and head should now point to the new node.
     * If there isn't any element in the list, then head should point to the new node.
     *
     * @complexity: O(1)
     *
     * @param {any} data - Element that will be added to the list.
     */
    pushFront(data: any): void {
        let newNode = new Node(data);

        if (this.head != null) {
            newNode.next = this.head;
        }
        this.head = newNode;
        this.size++;
    }

    /**
     * Remove front element and return value of it.
     *
     * @description First check if there isn't any element in the list, then return null.
     * Otherwise, assign value of head to variable removed and head should be point to the next element.
     * At the end, decrement size of list and return value of removed element.
     *
     * @return {Node | null}
     */
    popFront(): Node | null {

        if (this.head == null) {
            return null;
        }
        let removed = this.head.data;
        this.head = this.head.next;

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
     *  Add element to the end of the list.
     *
     *  @description If head is null, then call pushFront function.
     *  Otherwise, create new node with element. Then iterate list to find a node which
     *  next value is null which is also last element in the list and change that node
     *  next value to the new node.
     *
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
     * @description If head is null that means list is empty, so return null.
     * Or if head next element is null that means there is only one element in the list,
     * so head and tail is equal, call popFront(). Otherwise iterate list to find node
     * before last node because last node will be deleted. Then modify founded node next
     * value to null.
     *
     * @complexity O(n)
     *
     * @return {any | null}
     */
    popBack(): any | null {
        let pointer = this.head;

        if (pointer == null) {
            return null;
        }

        if (pointer.next == null) {
            return this.popFront();
        }


        while (pointer.next.next != null) {
            pointer = pointer.next;
        }

        let removed = pointer.next;
        pointer.next = null;

        this.size--;
        return removed.data;
    }

    /**
     * Return value of end element
     *
     * @description If head is null that means list is empty so return null.
     * Otherwise, iterate list to find a node that next value is null which is
     * last node in the list and return it's value.
     *
     * @complexity O(n)
     *
     * @return {any | null}
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
     * Remove node by value.
     *
     * @description If searching value is equal to value of head, then remove head.
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