/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/28/18, 20:27
 **/


export interface HashTableInterface {

    /**
     * Generate a hash for the key.
     *
     * @param {string} key
     * @return {number}
     */
    hash(key: string): number;

    /**
     * Add key,value pair to the hash table.
     *
     * @param key
     * @param value
     */
    put(key: any, value: any): void;

    /**
     * Get value by the key.
     *
     * @param key
     * @return {any}
     */
    get(key: any): any;

    /**
     * Remove element by the key.
     *
     * @param key
     * @return {boolean}
     */
    remove(key: any): boolean;

    /**
     * Check whether key exist in the list or not.
     *
     * @param key
     * @return {boolean}
     */
    has(key: any): boolean;

    /**
     * Check whether hash table is empty or not
     *
     * @return {boolean}
     */
    isEmpty(): boolean;
}