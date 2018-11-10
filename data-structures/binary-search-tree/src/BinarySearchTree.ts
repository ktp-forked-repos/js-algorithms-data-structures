/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/30/18, 17:30
 **/
import {TreeNode} from "./TreeNode";


export class BinarySearchTree {

    private size: number;
    private root: TreeNode | null;

    constructor() {
        this.size = 0;
        this.root = null;
    }


    /**
     *
     * @param {number} key
     */
    insert(key: number) {
        this.root = this.addRecursive(this.root, key);
        this.size++;
    }


    /**
     *
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        return this.findRecursive(this.root, key);
    }


    /**
     *
     * @param {TreeNode} current
     * @param {number} data
     * @return {TreeNode}
     */
    private addRecursive(current: TreeNode, data: number) {
        if (current == null) {
            return new TreeNode(data);
        }

        if (data < current.value) {
            current.leftChild = this.addRecursive(current.leftChild, data);
        } else if (data > current.value) {
            current.rightChild = this.addRecursive(current.rightChild, data);
        } else {
            return current;
        }

        return current;
    }


    /**
     *
     * @param {TreeNode} current
     * @param {number} key
     * @return {boolean}
     */
    private findRecursive(current: TreeNode, key: number): boolean {

        if(current == null){
            return false;
        }

        if (current.value == key) {
            return true;
        }


        return key < current.value
            ? this.findRecursive(current.leftChild, key)
            : this.findRecursive(current.rightChild, key);

    }

    search(key: number) {

    }


    searchRange(start: number, end: number) {

    }

    delete(key: number) {

    }


    /**
     * Check whether tree is empty or not.
     *
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.size == 0;
    }


}