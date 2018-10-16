/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/16/18, 09:45
 **/
import {Node} from "./Node";
import {LinkedListInterface} from "./LinkedListInterface";


export class LinkedListHead implements LinkedListInterface {

    private head: Node | null;
    private size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    pushFront(data: any): void {
    }

    popFront(): Node | null {
        return undefined;
    }

    getFront(): any | null {
        return undefined;
    }


    popBack(): Node | null {
        return undefined;
    }

    pushBack(data: any): void {
    }


    getBack(): any | null {
        return undefined;
    }

    removeByValue(value: any): boolean {
        return false;
    }


    getSize(): number {
        return 0;
    }

    isEmpty(): boolean {
        return false;
    }


    toArray(): any[] {
        return [];
    }


}