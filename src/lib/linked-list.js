'use strict';

const Node = require('./node');

module.exports = class LinkedList {
  constructor() {
    this._length = 0;
    this.head = null;
  }

  insertAtHead(value) {
    const newHead = new Node(value);
    if (!this.head) {
      this.head = newHead;
      this._length++;
      return this;
    }
    newHead.next = this.head;
    this.head = newHead;
    this._length++;
    return this;
  }
  insertAtEnd(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this._length++;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this._length++;
    return this;
  }

  remove(searchValue) {
    if (this.head === null) return;
    if (this.head.value === searchValue) {
      this.head = this.head.next;
      this._length--;
      return;
    }
    const currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.next.value === searchValue) {
        currentNode.next = currentNode.next.next;
        this._length--;
        return;
      }
    }
  }
    
  map(callback) {
    if (this.head === null) return;
    let result = [];
    let currentNode = this.head;
   
    // console.log('we are before callback in', currentNode.value);
    // callback(currentValue);
    // console.log ('we are after the callback in ', currentNode.value);
    // return this;
    
    while (currentNode) {
      result.push(callback(currentNode.value));
      currentNode = currentNode.next;
    }
    return result;
  }
  mutate(callback) {
    if (this.head === null) return;
    let currentNode = this.head;
   
    // console.log('we are before callback in', currentNode.value);
    // callback(currentValue);
    // console.log ('we are after the callback in ', currentNode.value);
    // return this;
    
    while (currentNode) {
      callback(currentNode.value);
      currentNode = currentNode.next;
    }
    return this;
  }

  // reduce(callback) {
  //   if (this.head === null) return;

  //   const currentNode = this.head;
  //   while (currentNode.next) {
  //     callback(currentNode.next.value);
  //   }
  // }
};
