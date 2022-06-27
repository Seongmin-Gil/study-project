class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.tail = 0;
    }

    size() {
        if(this.storage[this.tail] === undefined) {
            return 0;
        } else {
            return this.tail - this.front + 1; 
        }
    }

    add(value) {
        if(this.size === 0) {
            this.storage[0] = value;
        } else {
            this.tail += 1;
            this.storage[this.tail] = value;
        }
    }

    popLeft() {
        let temp;

        if(this.front === this.tail) {
            temp = this.storage[this.front];
            delete this.storage[this.front];
            this.front = 0;
            this.tail = 0;
        } else {
            temp = this.storage[this.front];
            delete this.storage[this.front];
            this.front += 1;
        }
        return temp;
    }
}