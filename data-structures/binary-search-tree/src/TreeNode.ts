/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/30/18, 17:30
 **/


export class TreeNode {

    public value: number;
    public leftChild: TreeNode;
    public rightChild: TreeNode;


    /**
     * @constructor
     * @param {number} data
     */
    constructor(data: number) {
        this.value = data;
        this.leftChild = null;
        this.rightChild = null;
    }


}