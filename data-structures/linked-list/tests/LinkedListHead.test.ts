/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/15/18, 16:11
 **/

import {LinkedListHead} from "../src/LinkedListHead";

describe('LinkedList with Head', () => {

    it("should create empty linked list",()=>{

        const  linkedList = new LinkedListHead();

        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.isEmpty()).toBeTruthy();
        expect(linkedList.getFront()).toBeNull();
        expect(linkedList.getBack()).toBeNull();
        expect(linkedList.popFront()).toBeNull();
        expect(linkedList.popBack()).toBeNull();
        expect(linkedList.toString()).toBe("");
    });

    it('should return number of element in the list', () => {
        const linkedList = new LinkedListHead();

        linkedList.pushFront("BMW");
        linkedList.pushFront("Audi");
        linkedList.pushFront("Mercedes");
        linkedList.pushFront("Kia");
        linkedList.pushFront("Ford");

        expect(linkedList.getSize()).toBe(5);
        expect(linkedList.isEmpty()).toBeFalsy();

    });

    it('should add element to the beginning of the list', () => {
        const linkedList = new LinkedListHead();

        linkedList.pushFront("BMW");
        linkedList.pushFront("Audi");

        expect(linkedList.toString()).toBe("Audi,BMW");
        expect(linkedList.getFront()).toBe("Audi");
        expect(linkedList.getBack()).toBe("BMW");
        expect(linkedList.getSize()).toBe(2);
        expect(linkedList.isEmpty()).toBeFalsy();


    });

    it('should remove front element and return value', () => {
        const linkedList = new LinkedListHead();

        linkedList.pushFront("BMW");
        let removed = linkedList.getFront();
        expect(linkedList.popFront()).toBe(removed);
        expect(linkedList.toString()).toBe("");

        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.isEmpty()).toBeTruthy();
        expect(linkedList.getFront()).toBeNull();
        expect(linkedList.getBack()).toBeNull();
        expect(linkedList.popFront()).toBeNull();
        expect(linkedList.popBack()).toBeNull();

        linkedList.pushFront("BMW");
        linkedList.pushFront("Audi");
        linkedList.pushFront("Mercedes");

        expect(linkedList.toString()).toBe("Mercedes,Audi,BMW");

        removed = linkedList.getFront();
        expect(linkedList.popFront()).toBe(removed);

        expect(linkedList.toString()).toBe("Audi,BMW");
        expect(linkedList.getFront()).toBe("Audi");
        expect(linkedList.getBack()).toBe("BMW");
        expect(linkedList.getSize()).toBe(2);
        expect(linkedList.isEmpty()).toBeFalsy();
    });

    it('should add element to the end of the list', () => {
        const linkedList = new LinkedListHead();

        linkedList.pushBack("Mercedes");
        expect(linkedList.toString()).toBe("Mercedes");
        expect(linkedList.getFront()).toBe("Mercedes");
        expect(linkedList.getBack()).toBe("Mercedes");
        expect(linkedList.getSize()).toBe(1);
        expect(linkedList.isEmpty()).toBeFalsy();


        linkedList.pushFront("BMW");
        linkedList.pushFront("Audi");

        linkedList.pushBack("Kia");

        expect(linkedList.toString()).toBe("Audi,BMW,Mercedes,Kia");
        expect(linkedList.getBack()).toBe("Kia");
        expect(linkedList.getFront()).toBe("Audi");
        expect(linkedList.getSize()).toBe(4);
        expect(linkedList.isEmpty()).toBeFalsy();
    });


    it('should remove back element and return value', () => {
        const linkedList = new LinkedListHead();

        expect(linkedList.getBack()).toBeNull();
        expect(linkedList.getFront()).toBeNull();

        linkedList.pushFront("BMW");
        linkedList.pushFront("Audi");
        linkedList.pushFront("Mercedes");
        expect(linkedList.toString()).toBe("Mercedes,Audi,BMW");
        expect(linkedList.getSize()).toBe(3);
        expect(linkedList.isEmpty()).toBeFalsy();


        linkedList.popBack();
        expect(linkedList.toString()).toBe("Mercedes,Audi");

        linkedList.popBack();
        expect(linkedList.toString()).toBe("Mercedes");
        linkedList.popBack();
        expect(linkedList.toString()).toBe("");
        expect(linkedList.getBack()).toBeNull();
        expect(linkedList.getFront()).toBeNull();
        expect(linkedList.getSize()).toBe(0);
        expect(linkedList.isEmpty()).toBeTruthy();


        linkedList.pushFront("BMW");

        let removed = linkedList.getBack();
        expect(linkedList.popBack()).toBe(removed);
        expect(linkedList.toString()).toBe("");
        expect(linkedList.getBack()).toBeNull();
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
        const linkedList = new LinkedListHead();
        let remove = null;

        linkedList.pushFront("BMW");
        linkedList.pushFront("Audi");
        linkedList.pushFront("Mercedes");
        linkedList.pushBack("Ford");

        expect(linkedList.toString()).toBe("Mercedes,Audi,BMW,Ford");
        expect(linkedList.getSize()).toBe(4);

        remove = linkedList.removeByValue("Mercedes");
        expect(remove).toBeTruthy();
        expect(linkedList.getFront()).toBe("Audi");
        expect(linkedList.getBack()).toBe("Ford");
        expect(linkedList.toString()).toBe("Audi,BMW,Ford");
        expect(linkedList.getSize()).toBe(3);


        remove = linkedList.removeByValue("BMWs");
        expect(remove).toBeFalsy();
        expect(linkedList.toString()).toBe("Audi,BMW,Ford");
        expect(linkedList.getSize()).toBe(3);

        remove = linkedList.removeByValue("BMW");
        expect(remove).toBeTruthy();
        expect(linkedList.getFront()).toBe("Audi");
        expect(linkedList.getBack()).toBe("Ford");
        expect(linkedList.toString()).toBe("Audi,Ford");
        expect(linkedList.getSize()).toBe(2);


        remove = linkedList.removeByValue("Ford");
        expect(remove).toBeTruthy();
        expect(linkedList.toString()).toBe("Audi");
        expect(linkedList.getFront()).toBe("Audi");
        expect(linkedList.getBack()).toBe("Audi");
        expect(linkedList.getSize()).toBe(1);

        remove = linkedList.removeByValue("Audi");
        expect(remove).toBeTruthy();
        expect(linkedList.toString()).toBe("");
        expect(linkedList.getFront()).toBeNull();
        expect(linkedList.getBack()).toBeNull();
        expect(linkedList.getSize()).toBe(0);
    });

    it('should return whether list is empty or not', () => {
        const linkedList = new LinkedListHead();

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




