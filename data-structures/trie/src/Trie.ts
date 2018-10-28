/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/27/18, 18:47
 **/
import {TrieNode} from "./TrieNode";

export class Trie {

    public readonly root: TrieNode;

    /**
     * @constructor
     */
    constructor() {
        this.root = new TrieNode("*");
    }


    /**
     *
     * @param {string} word
     */
    insert(word: string): void {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            let c = word[i];
            let child = current.children;

            if (child.has(c)) {
                current = child.get(c);
            } else {
                let newNode = new TrieNode(c);
                child.put(c, newNode);
                current = newNode;
            }
        }

        current.isWord = true;
    }


    /**
     *
     * @param {string} word
     * @return {boolean}
     */
    contains(word: string): boolean {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            let node = current.getChild(word[i]);

            if (node == null) {
                return false;
            }
            current = node;
        }

        return current.isWord;
    }


    /**
     * Traverse trie and add visited nodes to an array
     *
     * @param {string} word
     * @param {boolean} includeRoot
     * @return {TrieNode[]}
     */
    private traverse(word: string, includeRoot: boolean = false): TrieNode[] {
        let current = this.root;
        let traversed: TrieNode[] = [];
        if (includeRoot) traversed.push(current);

        for (let i = 0; i < word.length; i++) {
            let node = current.getChild(word[i]);

            if (node == null) {
                break;
            }
            current = node;
            traversed.push(current);
        }
        return traversed;
    }

    /**
     * Remove word from trie
     *
     * @param {string} word
     * @return {boolean}
     */
    remove(word: string) {
        let visited = this.traverse(word, true);

        let node: TrieNode = visited.pop();
        node.isWord = false;
        while (visited.length > 0 && !node.hasChildren() && !node.isWord) {
            let old = node;
            node = visited.pop();
            node.children.remove(old.character);
        }
    }
}