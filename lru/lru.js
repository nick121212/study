const LList = require("./llist");

/**
 * A doubly linked list-based Least Recently Used (LRU) cache. Will keep most
 * recently used items while discarding least recently used items when its limit
 * is reached.
 *
 * Licensed under MIT. Copyright (c) 2010 Rasmus Andersson <http://hunch.se/>
 * See README.md for details.
 *
 * Illustration of the design:
 *
 *       entry             entry             entry             entry
 *       ______            ______            ______            ______
 *      | head |.newer => |      |.newer => |      |.newer => | tail |
 *      |  A   |          |  B   |          |  C   |          |  D   |
 *      |______| <= older.|______| <= older.|______| <= older.|______|
 *
 *  removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added
 */

function LRUMap(limit = 5) {
    this.limit = limit;

    this.map = {};
    this.list = new LList();
}

LRUMap.prototype = {
    constructor: LRUMap,
    get(key) {
        this.list.moveToLast(key);

        return this.map[key] || undefined;
    },
    set(key, value) {
        this.list.moveToLast(key, true);

        if (this.list.size > this.limit) {
            this.list.removeFirst();
        }

        this.map[key] = value;
    }
};

var a = new LRUMap(5);

a.set("1", 1);
a.set("2", 1);
a.set("3", 1);
a.set("4", 1);
a.set("5", 1);
a.set("6", 1);
a.set("7", 1);

console.log(a.get("3"));

console.log("size:", a.list.size);

a.list.display();
