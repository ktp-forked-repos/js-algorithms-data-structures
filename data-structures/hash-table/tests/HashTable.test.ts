/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/25/18, 21:26
 **/
import {HashTable} from "../src/HashTable";


describe("HashTable", () => {


    it("should add data to hash table", () => {

        const myTable = new HashTable();

        myTable.put(994, "Azerbaijan");

        expect(myTable.has(994)).toBeTruthy();
        expect(myTable.get(994)).toBe("Azerbaijan");

        myTable.put(1, "USA");
        expect(myTable.has(1)).toBeTruthy();
        expect(myTable.get(1)).toBe("USA");


    });


    it("should remove data from hash table", () => {

        const myTable = new HashTable();

        myTable.put(994, "Azerbaijan");
        myTable.put(1, "USA");
        myTable.put(44, "United Kingdom");
        myTable.put(380, "Ukraine");

        expect(myTable.has(44)).toBeTruthy();
        expect(myTable.get(44)).toBe("United Kingdom");


        let isRemoved = myTable.remove(44);
        expect(isRemoved).toBeTruthy();
        expect(myTable.has(44)).toBeFalsy();
        expect(myTable.get(44)).toBeNull();


    });


});