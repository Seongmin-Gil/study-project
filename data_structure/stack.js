class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
    }
}

class Stack {
    constructor() {
        this.front = null;
        this.size = 0;
    }

    push(data) {
        const node = new Node(data);
        if(!this.size) {
            this.front = node;
        } else {
            node.prev = this.front;
            this.front = node;
        }
        this.size += 1;
    }

    pop() {
        if (!this.size) {
            return null;
        }
        const temp = this.front;
        this.front = this.front.prev;
        this.size -= 1;
        return temp.data;
    }
}