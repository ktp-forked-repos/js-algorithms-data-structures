/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/15/18, 21:55
 **/

import {Node} from "./Node";

export interface LinkedListInterface {

    /**
     * Add element to the beginning of the list
     *
     * @param data
     */
    pushFront(data: any): void;

    /**
     * Remove front element and return value of it
     *
     * @return {any | null}
     */
    popFront(): any | null;

    /**
     *  Return value of front element
     *
     * @return {any | null}
     */
    getFront(): any | null;

    /**
     * Add element to the end of the list.
     *
     * @param data
     */
    pushBack(data: any): void;

    /**
     * Remove end element and return value of it
     *
     * @return {any | null}
     */
    popBack(): any | null;

    /**
     *  Return value of end element
     *
     * @return {any | null}
     */
    getBack(): any | null;

    /**
     * Remove node by value
     *
     * @param value
     * @return {boolean}
     */
    removeByValue(value: any): boolean;

    /**
     * Return number of elements in the linked list
     *
     * @return {number}
     */
    getSize(): number;

    /**
     * Check whether list is empty or not
     *
     * @return {boolean}
     */
    isEmpty(): boolean;

    /**
     * Iterate the list and add value of nodes to array
     *
     * @return {any[]}
     */
    toArray(): any[];

    /**
     * Return list as string
     *
     * @return {string}
     */
    toString(): string;

}