/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/27/18, 19:29
 **/
import {HashTable} from "../../hash-table/src/open-addressing/HashTable";


export class TrieNode {

    public children: HashTable;
    public character: string;
    public isWord: boolean;


    /**
     * Construct new Node, if character is not specified use *
     *
     * @constructor
     */
    constructor(character: string = "*") {
        this.character = character;
        this.children = new HashTable(52);
        this.isWord = false;
    }

    /**
     * Check if node has children.
     *
     * @return {boolean}
     */
    hasChildren(): boolean {
        return !this.children.isEmpty();
    }

    /**
     * Check if node has the given child.
     *
     * @param {string} character
     * @return {boolean}
     */
    hasChild(character: string): boolean {
        return this.children.has(character);
    }

    /**
     *  Get child of parent node.
     *
     * @param {string} character
     * @return {any}
     */
    getChild(character: string): any {
        return this.children.get(character);
    }


    /**
     * Remove given child.
     *
     * @param {string} character
     * @return {boolean}
     */
    removeChild(character: string): boolean {
        return this.children.remove(character);
    }

    /**
     * Add child.
     *
     * @param {string} character
     * @param {TrieNode} node
     */
    addChild(character: string, node: TrieNode): void {
        this.children.put(character, node);
    }

}