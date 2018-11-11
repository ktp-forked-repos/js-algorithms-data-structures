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

        bst.add(10);
        bst.add(20);
        bst.add(30);

        expect(bst.isEmpty()).toBeFalsy();

    });


    it("should check whether element exist in tree", () => {
        const bst = new BinarySearchTree();

        bst.add(10);
        bst.add(20);
        bst.add(30);

        expect(bst.contains(20)).toBeTruthy();
        expect(bst.contains(25)).toBeFalsy();


    });

    it("should delete element from the tree", () => {
        const bst = new BinarySearchTree();

        bst.add(10);
        bst.add(20);
        bst.add(30);

        expect(bst.contains(20)).toBeTruthy();
        bst.delete(20);
        expect(bst.contains(20)).toBeFalsy();

        expect(bst.contains(10)).toBeTruthy();
        bst.delete(10);
        expect(bst.contains(10)).toBeFalsy();

        expect(bst.contains(30)).toBeTruthy();
        bst.delete(30);
        expect(bst.contains(30)).toBeFalsy();

        expect(bst.isEmpty()).toBeTruthy();

    });

    it("should traverse the tree", () => {
        const bst = new BinarySearchTree();

        bst.add(20);
        bst.add(15);
        bst.add(23);
        bst.add(12);
        bst.add(17);
        bst.add(16);
        bst.add(22);
        bst.add(24);
        bst.add(11);
        bst.add(13);
        bst.add(5);


        // Left - > Root - > Right
        expect(bst.traverseInOrder()).toBe("5,11,12,13,15,16,17,20,22,23,24");

        // Root -> Left -> Right
        expect(bst.traversePreOrder()).toBe("20,15,12,11,5,13,17,16,23,22,24");

        // Left -> Right -> Root
        expect(bst.traversePostOrder()).toBe("5,11,13,12,16,17,15,22,24,23,20");

    });


});