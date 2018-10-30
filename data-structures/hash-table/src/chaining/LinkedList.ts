/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/25/18, 22:44
 **/
import {LinkedListHead} from "../../../linked-list/src/LinkedListHead";


/**
 * Extend linked list for modifying it to work with object
 *
 */
export class LinkedList extends LinkedListHead {

    /**
     * Search key in the linked list
     *
     * @param key
     * @return {any}
     */
    searchByKey(key: any) {
        let pointer = this.head;

        while (pointer != null) {
            if (pointer.data["key"] === key) {
                return pointer.data;
            }
            pointer = pointer.next;

        }
        return null;
    }


    /**
     * Remove element from linked list based on key
     *
     * @param key
     * @return {boolean}
     */
    removeByKey(key: any): boolean {
        let pointer = this.head;

        if (pointer.data["key"] === key) {
            this.popFront();
            return true;
        }

        while (pointer.next != null) {
            if (pointer.next.data["key"] == key) {
                pointer.next = pointer.next.next;
                this.size--;
                return true;
            }
            pointer = pointer.next;
        }
        return false;
    }


}