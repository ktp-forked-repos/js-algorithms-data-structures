/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/25/18, 21:26
 **/
import {HashTable} from "../src/chaining/HashTable";


describe("HashTable with separate chaining", () => {

    it("should create empty hash table", () => {

        const myTable = new HashTable();
        expect(myTable.isEmpty()).toBeTruthy();

    });

    it("should generate hashes for the keys", () => {

        const myTable = new HashTable();

        expect(myTable.hash(994)).toBe(7);
        expect(myTable.hash("994")).toBe(7);


        expect(myTable.hash("abc")).toBe(14);
        expect(myTable.hash("acb")).toBe(13);
        expect(myTable.hash("bca")).toBe(11);
        expect(myTable.hash("cba")).toBe(10);
        expect(myTable.hash("cab")).toBe(11);


    });

    it("should add data to hash table", () => {

        const myTable = new HashTable();

        myTable.put("az", "Azerbaijan");
        myTable.put("es", "Spain");
        myTable.put("de", "Germany");
        myTable.put(994, "Azerbaijan");

        expect(myTable.has("az")).toBeTruthy();
        expect(myTable.has("es")).toBeTruthy();
        expect(myTable.has("de")).toBeTruthy();
        expect(myTable.has(994)).toBeTruthy();

        expect(myTable.has("994")).toBeFalsy();
        expect(myTable.has("us")).toBeFalsy();

        expect(myTable.isEmpty()).toBeFalsy();

    });

    it("should get data from hash table", () => {
        const myTable = new HashTable();

        myTable.put("az", "Azerbaijan");
        myTable.put("es", "Spain");
        myTable.put("de", "Germany");


        expect(myTable.get("az")).toBe("Azerbaijan");
        expect(myTable.get("es")).toBe("Spain");
        expect(myTable.get("de")).toBe("Germany");
        expect(myTable.get("us")).toBeNull();

    });

    it("should overwrite existing key with the new value", () => {
        const myTable = new HashTable();

        myTable.put("az", "Azerbaijan");
        myTable.put("az", "Azerbaijan Republic");
        expect(myTable.get("az")).toBe("Azerbaijan Republic");


        myTable.put("1", "US");
        myTable.put(1, "United States");
        expect(myTable.get("1")).toBe("US");
        expect(myTable.get(1)).toBe("United States");
    });

    it("should remove data from hash table", () => {
        const myTable = new HashTable();

        myTable.put("es", "Spain");
        myTable.put("de", "Germany");
        myTable.put(994, "Azerbaijan");
        myTable.put("994", "Azerbaijan Republic");

        expect(myTable.remove(994)).toBeTruthy();
        expect(myTable.has(994)).toBeFalsy();
        expect(myTable.has("994")).toBeTruthy();

        myTable.remove("es");
        myTable.remove("de");
        myTable.remove("994");

        expect(myTable.isEmpty()).toBeTruthy();

    });

    it("should create hash table with given size", () => {

        const myTable = new HashTable(3);

        myTable.put("az", "Azerbaijan");
        myTable.put("es", "Spain");
        myTable.put("de", "Germany");
        myTable.put("uk", "United Kingdom");

        expect(myTable.has("az")).toBeTruthy();
        expect(myTable.has("es")).toBeTruthy();
        expect(myTable.has("de")).toBeTruthy();
        expect(myTable.has("uk")).toBeFalsy();

        myTable.remove("es");
        myTable.put("uk", "United Kingdom");
        expect(myTable.has("uk")).toBeTruthy();
        expect(myTable.get("uk")).toBe("United Kingdom");

    });

});