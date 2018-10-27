/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/25/18, 21:34
 **/
import {LinkedList} from "./LinkedList";


export class HashTable {

    private readonly container;
    private readonly containerSize;

    //Increase default size to decrease number of collisions
    private readonly defaultSize = 64;

    /**
     *
     * @constructor
     * @param {number} customSize Size of hash table or array
     */
    constructor(customSize = 0) {
        this.container = [];

        this.containerSize = customSize > 0 ? customSize : this.defaultSize;
    }


    /**
     * Generate a hash for key.
     *
     * @description Calculate hash by summing each letter's ASCII value multiplied
     * by their respective index in the string. Then reduce hash number using module
     * operation, so it would fit in an array.
     *
     * @param key
     * @return {number}
     */
     hash(key: any): number {
        let hashed = 0;

        for (let i = 0; i < key.length; i++) {
            hashed = hashed + key.charCodeAt(i) * (i+1);
        }

        return hashed % this.containerSize;
    }


    /**
     * Add element to the hash table
     *
     * @description First, generate index by hashing the key. Then check if hashed index
     * is exist in the array, if not assign new LinkedList to array with that index. Then
     * check whether node with key exist in the list, if not add {key,value} object to the list.
     * Otherwise, if exist, update value of node.
     *
     * @param key
     * @param value
     */
    public put(key: any, value: any): void {
        let hashKey = this.hash(key);

        if (typeof this.container[hashKey] == "undefined") {
            this.container[hashKey] = new LinkedList();
        }

        const list = this.container[hashKey];
        const node = list.searchByKey(key);
        if (node == null) {
            list.pushFront({key, value});
        } else {
            node.value = value;
        }
    }


    /**
     * Get value by key
     *
     * @description Generate index by hashing key, then check if index exist in array, if so
     * find value in the linked list by searching key. If found return value, otherwise return null.
     *
     * @param key
     * @return {any}
     */
    public get(key: any): any {
        const hashKey = this.hash(key);

        if (hashKey in this.container) {
            const node = this.container[hashKey].searchByKey(key);
            return node ? node.value : null;
        }

        return null;
    }


    /**
     * Remove element by key
     *
     * @description Generate index by hashing key, then check if index exist in array, if so
     * remove value in the linked list by searching key.
     *
     * @param key
     * @return {boolean}
     */
    public remove(key: any): boolean {
        const hashKey = this.hash(key);

        if (hashKey in this.container) {
            return this.container[hashKey].removeByKey(key);
        }

        return false;
    }


    /**
     * Check whether key exist in the list or not
     *
     * @description Generate index by hashing key, then check if index exist in hash table
     *
     * @param key
     * @return {boolean}
     */
    public has(key: any): boolean {
        const hashKey = this.hash(key);

        if (hashKey in this.container) {
            const node = this.container[hashKey].searchByKey(key);
            return !!node;
        }

        return false;
    }

}
