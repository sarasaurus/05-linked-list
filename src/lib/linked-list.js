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
    const currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === searchValue) {
        currentNode.next = currentNode.next.next;
        this._length--;
      }
    }
    return this;
  }
    
  map(callback) {

    const currentNode = this.head;    
    while (currentNode.next) {
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
    return this;
  }
};
