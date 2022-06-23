class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    findNode(index) {
        let iterator = this.head;

        for(let i = 0; i < index; i++) {
            iterator = iterator.next;
        }

        return iterator;
    }

    findNodeWithData(data) {
        let iterator = this.head;

        while (iterator !== null) {
            if (iterator.data === data) {
                return iterator;
            }

            iterator = iterator.next;
        }

        return null;
    }

    append(data) {
        let node = new Node(data);

        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    insertAfter(previousNode, data) {
        let node = new Node(data);
        if(this.tail === previousNode) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            node.prev = previousNode;
            node.next = previousNode.next;
            previousNode.next.prev = node;
            previousNode.next = node;
        }
    }

    prepend(data) {
        let node = new Node(data);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
    }

    delete(nodeToDelete) {
        if(nodeToDelete === this.head && nodeToDelete === this.tail) {
            this.head = null;
            this.tail = null;
        } else if(nodeToDelete === this.head) {
            nodeToDelete.next.prev = null;
            this.head = nodeToDelete.next;
        } else if(nodeToDelete === this.tail) {
            nodeToDelete.prev.next = null;
            this.tail = nodeToDelete.prev;
        } else {
            nodeToDelete.prev.next = nodeToDelete.next;
            nodeToDelete.next.prev = nodeToDelete.prev;
        }
        return nodeToDelete.data;
    }
}

let my_list = new DubleLinkedList();
my_list.append(1);
my_list.append(2);
my_list.append(3);
my_list.append(4);

nodeTail = my_list.tail
let result = my_list.delete(nodeTail);
console.log(my_list);
console.log(result);