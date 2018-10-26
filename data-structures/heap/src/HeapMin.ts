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
     * @param firstChild
     * @param secondChild
     * @return {boolean}
     */
    compare(firstChild, secondChild) {
        return firstChild < secondChild
    }

}