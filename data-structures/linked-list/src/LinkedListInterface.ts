import {Node} from "./Node";

/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/15/18, 21:55
 **/

export interface LinkedListInterface {

    /**
     *  Add element to the beginning of the list
     *
     * @param data
     */
    pushFront(data: any): void;

    /**
     * Remove front element and return value of it
     *
     * @return Node
     */
    popFront(): Node | null;

    /**
     *  Return value of front element
     *
     * @return any | null
     */
    getFront(): any | null;

    /**
     *  Add element to the end of the list
     *
     * @param data
     */
    pushBack(data: any): void;

    /**
     * Remove end element and return value of it
     *
     * @return Node
     */
    popBack(): Node | null;

    /**
     *  Return value of end element
     *
     * @return any
     */
    getBack(): any | null;

    /**
     * Remove node by value
     *
     * @param value
     * @return boolean
     */
    removeByValue(value: any): boolean;

    /**
     * Return number of elements in the linked list
     *
     * @return number
     */
    getSize(): number;

    /**
     * Return true | false
     *
     * @return boolean
     */
    isEmpty(): boolean;

    /**
     *  Iterate the list and add value of nodes to array
     *
     *  @return arr
     */
    toArray(): any[];

    /**
     *  Return list as string
     * @return string
     */
    toString(): string;

}