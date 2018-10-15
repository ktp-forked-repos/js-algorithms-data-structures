/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/15/18, 15:37
 **/

export class Node {

    public data: any;
    public next: Node | null;


    /**
     *
     * @param data
     */
    constructor(data: any) {
        this.data = data;
        this.next = null;
    }


}