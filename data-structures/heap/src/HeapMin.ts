/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/18/18, 23:38
 **/
import {Heap} from "./Heap";


export class HeapMin extends Heap {


    constructor() {
        super();
    }

    compare(firstChild, secondChild) {
        return firstChild < secondChild
    }

}