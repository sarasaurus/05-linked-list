'use strict';
const Node = require('./node');

module.exports = class LinkedList {

    constructor(){
        this._length = 0;
        this.head = null;
    }
    insertAtEnd(value) {
        const node = new Node (value);
        if (!this.head) {
            this.head = node;
            this._length++;
            return this;
        }
        let currentNode = this.head;
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this._length++;
        return this;
    };
    //this is returning a reference error, but i dont see why
    remove(searchValue) {
        let currentNode = this.head;
        while(currentNode.next) {
            if (currentNode.value === searchValue){
                currentNode.next = currentNode.next.next;
                this._length--;
            }
        }
        return this;
    };
    
    map(action) {
        let currentNode = this.head;
        
        
        while(currentNode.next) {
            currentNode = currentNode.next;
        }

    }


};