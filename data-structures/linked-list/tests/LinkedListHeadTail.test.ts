/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/15/18, 16:11
 **/

import {LinkedListHeadTail} from "../src/LinkedListHeadTail";

describe('LinkedList', () => {

    it('should create empty linked list', () => {

        const linkedList = new LinkedListHeadTail();

        expect(linkedList.toString()).toBe("");
    });

    it('should return number of element in the list', () => {
        const linkedList = new LinkedListHeadTail();

        linkedList.pushFront("BMW");
        linkedList.pushFront("Audi");
        linkedList.pushFront("Mercedes");
        linkedList.pushFront("Kia");
        linkedList.pushFront("Ford");

        expect(linkedList.getSize()).toBe(5);

    });

    it('should add element to the beginning of the list', () => {

        const linkedList = new LinkedListHeadTail();

        linkedList.pushFront("BMW");
        linkedList.pushFront("Audi");

        expect(linkedList.toString()).toBe("Audi,BMW");
        expect(linkedList.getFront()).toBe("Audi");

    });

    it('should remove front element and return value', () => {
        const linkedList = new LinkedListHeadTail();

        expect(linkedList.popFront()).toBeNull();
        expect(linkedList.getFront()).toBeNull();

        linkedList.pushFront("BMW");
        let removed = linkedList.getFront();
        expect(linkedList.popFront()).toBe(removed);
        expect(linkedList.toString()).toBe("");
        expect(linkedList.getBack()).toBeNull();


        linkedList.pushFront("BMW");
        linkedList.pushFront("Audi");
        linkedList.pushFront("Mercedes");

        expect(linkedList.toString()).toBe("Mercedes,Audi,BMW");

        removed = linkedList.getFront();
        expect(linkedList.popFront()).toBe(removed);

        expect(linkedList.toString()).toBe("Audi,BMW");

    });

    it('should add element to the end of the list', () => {

        const linkedList = new LinkedListHeadTail();

        linkedList.pushFront("BMW");
        linkedList.pushFront("Audi");
        linkedList.pushBack("Mercedes");
        linkedList.pushBack("Kia");

        expect(linkedList.toString()).toBe("Audi,BMW,Mercedes,Kia");
        expect(linkedList.getBack()).toBe("Kia");

    });

    it('should remove back element and return value', () => {

        const linkedList = new LinkedListHeadTail();

        expect(linkedList.popFront()).toBeNull();
        expect(linkedList.getFront()).toBeNull();

        linkedList.pushFront("BMW");
        linkedList.pushFront("Audi");
        linkedList.pushFront("Mercedes");
        expect(linkedList.toString()).toBe("Mercedes,Audi,BMW");

        linkedList.popBack();
        linkedList.popBack();
        linkedList.popBack();
        expect(linkedList.toString()).toBe("");
        expect(linkedList.popFront()).toBeNull();
        expect(linkedList.getFront()).toBeNull();


        linkedList.pushFront("BMW");

        let removed = linkedList.getBack();
        expect(linkedList.popBack()).toBe(removed);
        expect(linkedList.toString()).toBe("");
        expect(linkedList.popFront()).toBeNull();
        expect(linkedList.getFront()).toBeNull();


        linkedList.pushFront("BMW");
        linkedList.pushFront("Audi");
        linkedList.pushFront("Mercedes");
        linkedList.pushFront("Kia");
        linkedList.pushBack("Ford");

        expect(linkedList.toString()).toBe("Kia,Mercedes,Audi,BMW,Ford");

        removed = linkedList.getBack();
        expect(linkedList.popBack()).toBe(removed);

        expect(linkedList.toString()).toBe("Kia,Mercedes,Audi,BMW");

        linkedList.pushBack("Fiat");
        linkedList.pushFront("Ferrari");
        expect(linkedList.toString()).toBe("Ferrari,Kia,Mercedes,Audi,BMW,Fiat");

    });

    it('should remove node by value', () => {
        const linkedList = new LinkedListHeadTail();
        let remove = null;

        linkedList.pushFront("BMW");
        linkedList.pushFront("Audi");
        linkedList.pushFront("Mercedes");
        linkedList.pushBack("Ford");

        expect(linkedList.toString()).toBe("Mercedes,Audi,BMW,Ford");


        remove = linkedList.removeByValue("Mercedes");
        expect(remove).toBeTruthy();
        expect(linkedList.getFront()).toBe("Audi");
        expect(linkedList.getBack()).toBe("Ford");
        expect(linkedList.toString()).toBe("Audi,BMW,Ford");


        remove = linkedList.removeByValue("BMWs");
        expect(remove).toBeFalsy();
        expect(linkedList.toString()).toBe("Audi,BMW,Ford");

        remove = linkedList.removeByValue("BMW");
        expect(remove).toBeTruthy();
        expect(linkedList.getFront()).toBe("Audi");
        expect(linkedList.getBack()).toBe("Ford");
        expect(linkedList.toString()).toBe("Audi,Ford");


        remove = linkedList.removeByValue("Ford");
        expect(remove).toBeTruthy();
        expect(linkedList.toString()).toBe("Audi");
        expect(linkedList.getFront()).toBe("Audi");
        expect(linkedList.getBack()).toBe("Audi");


    });

    it('should return whether list is empty or not', () => {
        const linkedList = new LinkedListHeadTail();

        linkedList.pushFront("BMW");
        linkedList.pushFront("Audi");
        expect(linkedList.isEmpty()).toBeFalsy();

        linkedList.popBack();
        linkedList.popFront();
        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.isEmpty()).toBeTruthy();

        linkedList.pushFront("BMW");
        linkedList.popBack();
        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.isEmpty()).toBeTruthy();


        linkedList.pushBack("BMW");
        linkedList.popFront();
        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.isEmpty()).toBeTruthy();

    });

});




