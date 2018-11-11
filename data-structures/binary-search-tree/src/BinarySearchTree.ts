/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/30/18, 17:30
 **/
import {TreeNode} from "./TreeNode";


export class BinarySearchTree {

    private size: number;
    public root: TreeNode | null;

    constructor() {
        this.size = 0;
        this.root = null;
    }


    /**
     *  Add number to the tree
     *
     * @param {number} data
     */
    add(data: number) {
        this.root = this.addRecursive(this.root, data);
        this.size++;
    }

    /**
     * Add number to the tree with recursion
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
     * Check whether element exist in the tree
     *
     * @param {number} data
     * @return {boolean}
     */
    contains(data: number): boolean {
        return this.findRecursive(this.root, data);
    }

    /**
     * Find element in the tree with recursion
     *
     * @param {TreeNode} current
     * @param {number} data
     * @return {boolean}
     */
    private findRecursive(current: TreeNode, data: number): boolean {
        if (current == null)
            return false;

        if (current.value == data)
            return true;

        return data < current.value
            ? this.findRecursive(current.leftChild, data)
            : this.findRecursive(current.rightChild, data);
    }


    /**
     * Delete element from the tree
     *
     * @param {number} data
     */
    delete(data: number) {
        this.root = this.deleteRecursively(this.root, data);
    }

    /**
     * Find and delete element from the tree with recursion
     *
     * @param {TreeNode} current
     * @param {number} data
     * @return {TreeNode}
     */
    private deleteRecursively(current: TreeNode, data: number): TreeNode {
        if (current == null) {
            return null;
        }

        if (current.value == data) {

            this.size--;

            if (current.leftChild == null && current.rightChild == null) {
                return null;
            }

            if (current.rightChild == null) {
                return current.leftChild;
            }
            if (current.leftChild == null) {
                return current.rightChild;
            }

            let smallestValue = this.findSmallestValue(current.rightChild);
            current.value = smallestValue;
            current.rightChild = this.deleteRecursively(current.rightChild, smallestValue);
            return current;

        }


        if (data < current.value) {
            current.leftChild = this.deleteRecursively(current.leftChild, data);
            return current;
        }
        current.rightChild = this.deleteRecursively(current.rightChild, data);

        return current;
    }


    /**
     *
     * @param {TreeNode} current
     * @return {number}
     */
    private findSmallestValue(current: TreeNode) {
        return current.leftChild == null ? current.value : this.findSmallestValue(current.leftChild);
    }


    /**
     * Traverse the tree by first visiting left sub-tree, then root, and finally right sub-tree
     *
     * @param {TreeNode} node
     * @param {number[]} arr
     * @return {string}
     */
    traverseInOrder(node: TreeNode = this.root, arr: number[] = []): string {
        if (node == null) return;

        this.traverseInOrder(node.leftChild, arr);
        arr.push(node.value);
        this.traverseInOrder(node.rightChild, arr);

        return arr.toString();
    }


    /**
     * Traverse the tree by first visiting root, then left sub-tree, and finally right sub-tree
     *
     * @param {TreeNode} node
     * @param {number[]} arr
     * @return {string}
     */
    traversePreOrder(node: TreeNode = this.root, arr: number[] = []): string {
        if (node == null) return;

        arr.push(node.value);
        this.traversePreOrder(node.leftChild, arr);
        this.traversePreOrder(node.rightChild, arr);

        return arr.toString();
    }


    /**
     * Traverse the tree by first visiting left sub-tree, then right sub-tree, and finally root
     *
     * @param {TreeNode} node
     * @param {number[]} arr
     * @return {string}
     */
    traversePostOrder(node: TreeNode = this.root, arr: number[] = []): string {
        if (node == null) return;

        this.traversePostOrder(node.leftChild, arr);
        this.traversePostOrder(node.rightChild, arr);
        arr.push(node.value);

        return arr.toString();
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