/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/18/18, 15:05
 **/

/**
 * Max Heap
 */
export abstract class Heap {

    protected container: any;

    /**
     * @constructor
     */
    protected constructor() {
        this.container = [];
    }


    /**
     *  Get index of left element of parent
     *
     * @param {number} index
     * @return {number}
     */
    private leftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    /**
     * Get index of right element of parent
     *
     * @param {number} index
     * @return {number}
     */
    private rightChildIndex(index: number) {
        return 2 * index + 2;
    }

    /**
     * Get index of child's parent
     *
     * @param {number} index
     * @return {number}
     */
    private parentIndex(index: number): number {
        return Math.floor((index - 1) / 2);

    }


    /**
     * Check whether parent has left child or not
     *
     * @param {number} index
     * @return {boolean}
     */
    private hasLeftChild(index: number): boolean {
        return this.leftChildIndex(index) < this.container.length;
    }

    /**
     * Check whether parent has right child or not
     *
     * @param {number} index
     * @return {boolean}
     */
    private hasRightChild(index: number): boolean {
        return this.rightChildIndex(index) < this.container.length;
    }

    /**
     * Check whether child has parent or not
     *
     * @param {number} index
     * @return {boolean}
     */
    private hasParent(index: number): boolean {
        return this.parentIndex(index) >= 0;
    }

    /**
     * Get value of left element of parent
     *
     * @param {number} parent Index of parent element
     * @return {number}
     */
    private leftChild(parent: number): number {
        return this.container[this.leftChildIndex(parent)];
    }

    /**
     * Get value of right element of parent
     *
     * @param {number} parent Index of parent element
     * @return {number}
     */
    private rightChild(parent: number): number {
        return this.container[this.rightChildIndex(parent)];
    }

    /**
     * Get value of child parent
     *
     * @param {number} index Index of child element
     * @return {number}
     */
    private getParent(index: number): number {
        return this.container[this.parentIndex(index)];

    }

    /**
     * Swap two element in the tree
     *
     * @param {number} i
     * @param {number} j
     */
    private swap(i: number, j: number): void {
        let temp = this.container[i];
        this.container[i] = this.container[j];
        this.container[j] = temp;
    }


    /**
     * Find right position of added(last) element from bottom to top
     *
     * @description If container size is 0 that means tree is empty, so nothing to do, return null.
     * In max Heap, child node value should be less or equal to its parent value. On the other hand,
     * in min Heap, child node vale should be greater or equal to its parent value. Therefore, Iterate
     * tree with corresponding condition and swap elements to put them right position.
     *
     */
    private siftUp(): void {
        if (this.container.length == 0) return;

        let index = this.container.length - 1;

        while (this.hasParent(index) && this.compare(this.container[index], this.getParent(index))) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }


    /**
     * Find right position of elements after delete operation.
     *
     * @description Swap nodes from top to bottom to find right place of root node.
     *
     */
    private siftDown(): void {
        let index = 0;

        while (this.hasLeftChild(index)) {

            let compareIndex = this.leftChildIndex(index);
            if (this.hasRightChild(index) && this.compare(this.rightChild(index), this.leftChild(index))) {
                compareIndex = this.rightChildIndex(index);
            }

            if (this.compare(this.container[compareIndex], this.container[index])) {
                this.swap(compareIndex, index);
            } else {
                break;
            }
            index = compareIndex;

        }
    }


    /**
     * Get root element of tree
     *
     * @description If array size is 0 means tree is empty, so return null.
     * Otherwise return first element in the array.
     *
     * @return {number | null}
     */
    public peek(): number | null {
        if (this.container.lenngth == 0) return null;
        return this.container[0];
    }

    /**
     *  Add element to the tree.
     *
     *  @description Push element to the array then call siftUp() function to put it on right position.
     *
     * @param {number} element
     */
    public add(element: number): void {
        this.container.push(element);
        this.siftUp();
    }

    /**
     * Remove root element from heap tree.
     *
     * @description First, we remove root node and then move last element to the root.
     * Then call siftDown() function to find right position of element.
     *
     *
     * @return {number | null}
     */
    public poll(): number | null {
        if (this.container.length == 0) return null;

        let item = this.container[0];

        this.container[0] = this.container.pop();

        this.siftDown();

        return item;
    }


    /**
     * Check whether heap is empty or not
     *
     * @return {boolean}
     */
    public isEmpty(): boolean {
        return this.container.length > 0
    }

    /**
     * Return list as a string
     *
     * @return {string}
     */
    toString(): string {

        return this.container.toString();
    }

    /**
     *  Compare two number.
     *
     *  @description Method will be implemented in extended class.
     *
     * @param firstChild
     * @param secondChild
     * @return {boolean}
     */
    protected compare(firstChild, secondChild) {
        return false;
    };

}

