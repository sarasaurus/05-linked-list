const LinkedList = require('../lib/linked-list');

describe('linked-list.js', () => {
    test('#constructor', () => {
        const testList = new LinkedList();
        expect(testList.head).toBeNull();
    });
    test('#insertAtEnd', () => {
        const testList = new LinkedList();
        testList.insertAtEnd(5);
        expect(testList.head.value).toEqual(5);
        expect(testList._length).toEqual()
        testList.insertAtEnd(10);
        expect(testList.head.value).toEqual(5);
        expect(testList.head.next.value).toEqual(10);

    })
    test('#remove from list', () => {
        const testList = new LinkedList();
        testList.insertAtEnd(9);
        testList.insertAtEnd(10);
        testList.insertAtEnd(9);
        testList.insertAtEnd(9);
        testList.remove(10);
        expect(testList.head.next.value).toEqual(9);
    })
    test('#map over list', () => {
        const testList = new LinkedList();
        testList.insertAtEnd(9);
        testList.insertAtEnd(10);
        testList.insertAtEnd(9);
        testList.insertAtEnd(9);
        testList.map()

    }) 
})