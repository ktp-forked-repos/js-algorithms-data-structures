/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/25/18, 21:34
 **/
import {LinkedList} from "./LinkedList";
import {HashTableInterface} from "../HashTableInterface";

export class HashTable implements HashTableInterface {

    private readonly container;
    private readonly containerSize;
    private size: number;

    //Increase default size to decrease number of collisions
    private readonly DEFAULT_SIZE = 64;

    /**
     *
     * @constructor
     * @param {number} customSize Size of hash table or array
     */
    constructor(customSize = 0) {
        this.container = [];
        this.size = 0;

        this.containerSize = customSize > 0 ? customSize : this.DEFAULT_SIZE;
    }


    /**
     * Generate a hash for the key.
     *
     * @description Calculate hash by summing each character's ASCII value multiplied
     * by their respective index in the string. Then reduce hash number using module
     * operation, so it would fit in an array. Keep in mind that, charCodeAt() function
     * only works with strings, so numbers should be converted to strings too.
     *
     * @param key
     * @return {number}
     */
    hash(key: any): number {
        let hashed = 0;
        key = key.toString();

        for (let i = 0; i < key.length; i++) {
            hashed = hashed + key.charCodeAt(i) * (i + 1);
        }

        return hashed % this.containerSize;
    }


    /**
     * Add key,value pair to the hash table.
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

        if (this.size >= this.containerSize) return;

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

        this.size++;
    }


    /**
     * Get value by the key.
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
     * Remove element by the key.
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
            this.size--;
            return this.container[hashKey].removeByKey(key);
        }

        return false;
    }


    /**
     * Check whether key exist in the list or not.
     *
     * @description Generate index by hashing key, then check if index exist in hash table.
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


    /**
     * Check whether hash table is empty or not
     *
     * @return {boolean}
     */
    isEmpty(): boolean {
        return this.size == 0;
    }

}