/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/30/18, 17:29
 **/
import {BinarySearchTree} from "../src/BinarySearchTree";

describe('Binary Search Tree', () => {

    it("should create an empty tree", () => {

        const bst = new BinarySearchTree();

        expect(bst.isEmpty()).toBeTruthy();

    });

    it("should add element to tree", () => {

        const bst = new BinarySearchTree();

        bst.insert(10);
        bst.insert(20);
        bst.insert(30);

        expect(bst.isEmpty()).toBeFalsy();

    });


    it("should check whether element exist in tree",()=>{
        const bst = new BinarySearchTree();

        bst.insert(10);
        bst.insert(20);
        bst.insert(30);

        expect(bst.contains(20)).toBeTruthy();
        expect(bst.contains(25)).toBeFalsy();


    })


});