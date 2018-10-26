/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/18/18, 23:38
 **/
import {Heap} from "./Heap";


export class HeapMin extends Heap {

    /**
     * @constructor
     */
    constructor() {
        super();
    }


    /**
     * Compare two numbers
     *
     * @param {number} firstChild
     * @param {number} secondChild
     * @return {boolean}
     */
    compare(firstChild: number, secondChild: number) {
        return firstChild < secondChild
    }

}