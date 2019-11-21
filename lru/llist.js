const Node = require("./node");

function LList() {
    this.headValue = Symbol();
    this.head = new Node(this.headValue);
    this.size = 0;
}

LList.prototype = {
    constructor: LList,
    findLast: findLast,
    find: find,
    insert: insert,
    display: display,
    swap: swap,
    moveToLast: moveToLast,
    remove: remove,
    removeFirst: removeFirst,
    insertLast: insertLast
};

function findLast() {
    var currNode = this.head;

    while (currNode && currNode.next) {
        currNode = currNode.next;
    }

    return currNode;
}

function find(item) {
    var currNode = this.head;

    while (currNode && currNode.element !== item) {
        currNode = currNode.next;
    }

    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);

    if (!this.head) {
        this.head = newNode;

        return;
    }

    if (!current) {
        throw new Error("can not find element" + item);
    }

    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;

    this.size++;
}

function insertLast(newElement) {
    var lastNode = this.findLast();

    this.insert(newElement, lastNode.element);
}

function swap(a, b) {
    var aNode = this.find(a);
    var bNode = this.find(b);

    if (aNode && bNode) {
        const aElement = aNode.element;

        aNode.element = bNode.element;
        bNode.element = aElement;
    }
}

function moveToLast(item, nullToInsert) {
    const lastNode = this.findLast();
    const currNode = this.find(item);

    if (currNode === lastNode) {
        return;
    }

    if (!currNode) {
        if (nullToInsert) {
            this.insertLast(item);
        }

        return;
    }

    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;

    lastNode.next = currNode;

    currNode.previous = lastNode;
    currNode.next = null;
}

function display() {
    var currNode = this.head;

    while (currNode && !(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}

function remove(item) {
    var currNode = this.find(item);

    if (!currNode) {
        return;
    }

    currNode.previous.next = currNode.next;

    if (currNode.next) {
        currNode.next.previous = currNode.previous;
    }

    currNode.next = currNode.previous = null;

    this.size--;
}

function removeFirst() {
    var firstNode = this.head.next;

    if (firstNode) {
        this.remove(firstNode.element);
    }
}

// const list = new LList();

// list.insert(1, list.headValue);
// list.insert(2, 1);
// list.insert(3, 2);

// list.insertLast(1);
// list.insertLast(2);
// list.insertLast(3);
// list.insertLast(4);

// list.moveToLast(4);

// list.remove(2);
// list.remove(4);
// list.remove(3);
// list.remove(1);

// list.removeFirst();

// list.display();

exports = module.exports = LList;
