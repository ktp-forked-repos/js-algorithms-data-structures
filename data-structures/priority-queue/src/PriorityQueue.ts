/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/27/18, 01:08
 **/
import {HeapMax} from "../../heap/src/HeapMax";

export class PriorityQueue extends HeapMax {

    private readonly bucket;

    /**
     * @constructor
     */
    constructor() {
        super();
        this.bucket = {key: <number> 0, value: <any> null};
    }


    /**
     * Insert element to the queue with priority
     *
     * @param element
     * @param {number} priority
     */
    insert(element: any, priority: number) {
        this.bucket[priority] = element;
        this.add(priority);
    }


    /**
     * Extracts element with the highest priority/
     *
     * @return {any}
     */
    extract(): any {
        let priority = this.poll();
        let removed = this.bucket[priority];
        delete  this.bucket[priority];

        return removed;
    }


    /**
     * Get element with the highest priority
     *
     * @return {any}
     */
    getMax(): any {
        let priority = this.peek();

        return priority ? this.bucket[priority] : null;
    }


    /**
     * Change priority of the element
     *
     * @param element
     * @param {number} priority
     */
    changePriority(element: any, priority: number) {

        // TODO
    }

    /**
     * Remove element
     *
     * @param element
     */
    remove(element: any) {

        // TODO
    }
}