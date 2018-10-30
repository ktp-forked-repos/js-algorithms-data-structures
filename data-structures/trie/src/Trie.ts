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
        this.root = new TrieNode();
    }


    /**
     * Insert word to the trie.
     *
     * @description First check whether character is child node of its'parent.
     * If so, that node should be new parent. If not, create new node with the character,
     * then add it as a child node to the parent and make it parent node.
     *
     * @param {string} word
     */
    insert(word: string): void {
        let current = this.root;

        for (let i = 0; i < word.length; i++) {
            let c = word[i];

            if (current.hasChild(c)) {
                current = current.getChild(c);
            } else {
                let newNode = new TrieNode(c);
                current.addChild(c, newNode);
                current = newNode;
            }
        }

        current.isWord = true;
    }


    /**
     * Check whether trie contains given word.
     *
     * @description Traverse trie and add visited nodes to the array.
     * Then get last node from the array and if that node is null, it means
     * word is not exist in the trie. Otherwise it may exist as word (true) or
     * as prefix of other words (false)
     *
     * @param {string} word
     * @return {boolean}
     */
    contains(word: string): boolean {
        let lastVisited = this.traverse(word).pop();
        return lastVisited ? lastVisited.isWord : false;
    }


    /**
     * Traverse trie and add visited nodes to an array.
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
            current = current.getChild(word[i]);
            traversed.push(current);
            if (current == null) {
                break;
            }
        }
        return traversed;
    }

    /**
     * Remove word from trie
     *
     * @description Traverse trie and add visited nodes to the array and get last
     * node from that array and if it is null that means word doesn't exist in
     * the trie, so stop. Otherwise, change isWord property of the node to false
     * to un-mark it as a word. Then iterate the array to check if node doesn't have
     * a child and wasn't marked as a word, then remove it form trie. For removing delete
     * that node from it's parent.
     *
     * @param {string} word
     * @return {boolean}
     */
    remove(word: string) {
        let visited = this.traverse(word, true);
        let node: TrieNode = visited.pop();

        if (node == null) {
            return;
        }

        node.isWord = false;
        while (visited.length > 0 && !node.hasChildren() && !node.isWord) {
            let old = node;
            node = visited.pop();
            node.removeChild(old.character);
        }
    }
}