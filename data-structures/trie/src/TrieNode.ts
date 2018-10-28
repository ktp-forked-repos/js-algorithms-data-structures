/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/27/18, 19:29
 **/
import {HashTable} from "../../hash-table/src/HashTable";


export class TrieNode {

    public children: HashTable;
    public character: string;
    public isWord: boolean;

    /**
     * @constructor
     */
    constructor(character) {
        this.character = character;
        this.children = new HashTable(26);
        this.isWord = false;
    }

    /**
     * Check if node has child.
     *
     * @return {boolean}
     */
    hasChildren(): boolean {
        return !this.children.isEmpty();
    }

    /**
     *  Get child of parent node.
     *
     * @param {string} character
     * @return {boolean}
     */
    getChild(character: string) {
        return this.children.get(character);
    }

}