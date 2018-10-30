/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/28/18, 20:32
 **/
import {HashTableInterface} from "../HashTableInterface";

export class HashTable implements HashTableInterface {

    private readonly container;
    private readonly containerSize;

    private size: number;

    // Increase default size to decrease number of collisions
    private readonly DEFAULT_SIZE: number = 64;

    // Will be added to array when an element is removed
    private readonly REMOVED_FLAG: string = "R.I.P";

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
     * by their respective index in the string. Keep in mind that, charCodeAt() function
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

        return hashed;
    }

    /**
     * Probing function for generating new hash to check other empty slots.
     *
     * @description Linear probing approach is used to generate new hashes.
     *
     * @param {number} hash
     * @param {number} trial
     * @return {number}
     */
    private probing(hash: number, trial: number): number {
        return (hash + trial) % this.containerSize;
    }


    /**
     * Add key,value pair to the hash table.
     *
     * @param key
     * @param value
     */
    put(key: any, value: any): void {
        if (this.size >= this.containerSize) return;

        let trial = 0;
        let hashed = this.hash(key);
        let index = this.probing(hashed, trial);

        while (this.container[index] != null && this.container[index] != this.REMOVED_FLAG
        && this.container[index]["key"] !== key) {
            index = this.probing(hashed, trial);
            trial++;
        }

        this.container[index] = {key, value};
        this.size++;
    }


    /**
     * Get value by the key.
     *
     * @param key
     * @return {any | null}
     */
    get(key: any): any | null {
        let trial = 0;
        let keyHash = this.hash(key);
        let index = this.probing(keyHash, trial);


        while (trial <= this.containerSize && this.container[index] != null) {

            if (this.container[index]["key"] === key) {
                return this.container[index]["value"];
            }

            trial++;
            index = this.probing(keyHash, trial);
        }

        return null;
    }


    /**
     * Check whether key exist in the list or not.
     *
     * @param key
     * @return {boolean}
     */
    has(key: any): boolean {
        let trial = 0;
        let keyHash = this.hash(key);
        let index = this.probing(keyHash, trial);

        while (trial <= this.containerSize && this.container[index] != null) {

            if (this.container[index]["key"] === key) {
                return true;
            }

            trial++;
            index = this.probing(keyHash, trial);
        }

        return false;
    }


    /**
     * Remove element by the key.
     *
     * @description If hash table is empty then there is nothing to do return null.
     *
     * @param key
     * @return {boolean}
     */
    remove(key: any): boolean {
        if (this.isEmpty()) return false;

        let trial = 0;
        let keyHash = this.hash(key);
        let index = this.probing(keyHash, trial);

        while (trial <= this.containerSize && this.container[index] != null) {

            if (this.container[index]["key"] === key) {
                this.container[index] = this.REMOVED_FLAG;
                this.size--;
                return true;
            }
            trial++;
            index = this.probing(keyHash, trial);
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