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
     *
     */
    protected constructor() {
        this.container = [];
    }


    /**
     *  Get index of left element of parent
     * @param index
     * @return number
     */
    private leftChildIndex(index: number): number {
        return 2 * index + 1;
    }

    /**
     *  Get index of right element of parent
     * @param index
     * @return number
     */
    private rightChildIndex(index: number) {
        return 2 * index + 2;
    }

    /**
     * Get index of child parent
     *
     * @param index
     * @return number
     */
    private parentIndex(index: number): number {
        return Math.floor((index - 1) / 2);

    }


    /**
     *
     * @param {number} index
     * @return {boolean}
     */
    private hasLeftChild(index: number): boolean {
        return this.leftChildIndex(index) < this.container.length;
    }

    /**
     *
     * @param {number} index
     * @return {boolean}
     */
    private hasRightChild(index: number): boolean {
        return this.rightChildIndex(index) < this.container.length;
    }


    /**
     *
     * @param index
     * @return {boolean}
     */
    private hasParent(index) {
        return this.parentIndex(index) >= 0;
    }


    /**
     * Get value of left element of parent
     *
     * @param parent
     * @return number
     */
    private leftChild(parent): number {
        return this.container[this.leftChildIndex(parent)];
    }

    /**
     * Get value of right element of parent
     *
     * @param parent
     * @return number
     */
    private rightChild(parent): number {
        return this.container[this.rightChildIndex(parent)];
    }

    /**
     * Get value of  child parent
     *
     * @param index
     * @return number
     */
    private getParent(index): number {
        return this.container[this.parentIndex(index)];

    }


    /**
     * Swap two element in the list
     *
     * @param i
     * @param j
     */
    private swap(i, j): void {
        let temp = this.container[i];
        this.container[i] = this.container[j];
        this.container[j] = temp;
    }


    private heapifyUp() {
        if (this.container.length == 0) return;

        let index = this.container.length - 1;


        // while (this.hasParent(index) && this.container[index] > this.getParent(index)) {
        while (this.hasParent(index) && this.compare(this.container[index], this.getParent(index))) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);

        }
    }



    private heapifyDown() {
        let index = 0;


        while (this.hasLeftChild(index)) {
            let compareIndex = this.leftChildIndex(index);
            if (this.hasRightChild(index) && this.compare(this.rightChild(index), this.leftChild(index))) {
                compareIndex = this.rightChildIndex(index);
            }
            // if (this.container[compareIndex] > this.container[index]) {
            if (this.compare(this.container[compareIndex], this.container[index])) {
                this.swap(compareIndex, index);
            } else {
                break;
            }
            index = compareIndex;

        }


    }


    /**
     *
     *
     * @return {number | null}
     */
    public peek(): number | null {
        if (this.container.lenngth == 0) return null;
        return this.container[0];
    }

    public add(element: number): void {
        this.container.push(element);
        this.heapifyUp();
    }

    public poll(): number | null {
        if (this.container.lenngth == 0) return null;

        let item = this.container[0];

        this.container[0] = this.container.pop();

        this.heapifyDown();

        return item;
    }

    /**
     * Return list as a string
     *
     * @return {string}
     */
    toString(): string {

        return this.container.toString();
    }


    protected compare(firstChild, secondChild) {
        return false;
    };

}

