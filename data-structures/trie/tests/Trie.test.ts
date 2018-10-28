/**
 * Author: Ilkin Huseynov
 * E-mail: ihuseynoff@gmail.com
 * Web: huseynov.me
 * Date: 10/27/18, 18:47
 **/
import {Trie} from "../src/Trie";


describe("Trie", () => {


    it("should insert words to trie", () => {
        const trie = new Trie();

        trie.insert("Car");
        trie.insert("Card");
        trie.insert("Carpet");
        trie.insert("Book");
        trie.insert("Bold");
        trie.insert("Red");
        trie.insert("Remove");

        expect(trie.contains("Ca")).toBeFalsy();
        expect(trie.contains("Car")).toBeTruthy();
        expect(trie.contains("Card")).toBeTruthy();
        expect(trie.contains("Carpet")).toBeTruthy();
        expect(trie.contains("Book")).toBeTruthy();
        expect(trie.contains("Bold")).toBeTruthy();
        expect(trie.contains("Red")).toBeTruthy();
        expect(trie.contains("Remove")).toBeTruthy();
    });

    it("should remove word from trie",()=>{
        const trie = new Trie();

        trie.insert("Car");
        trie.insert("Card");
        trie.insert("Carpet");
        trie.insert("Book");
        trie.insert("Bold");
        trie.insert("Red");
        trie.insert("Remove");


        expect(trie.contains("Car")).toBeTruthy();
        trie.remove("Car");
        expect(trie.contains("Car")).toBeFalsy();

        expect(trie.contains("Carpet")).toBeTruthy();
        trie.remove("Carpet");
        expect(trie.contains("Carpet")).toBeFalsy();



        expect(trie.contains("Card")).toBeTruthy();
        trie.remove("Card");
        expect(trie.contains("Card")).toBeFalsy();


        expect(trie.contains("Book")).toBeTruthy();
        trie.remove("Book");
        expect(trie.contains("Book")).toBeFalsy();



    });


});