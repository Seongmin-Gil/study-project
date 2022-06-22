//자료구조 링크드 리스트에 관한 데이터 코드

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

// 링크드 리스트 삽입 연산
    insertLast(data) {
        let node = new Node(data);
        

        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size ++;
    }
    
// 링크드 리스트의 접근 연산
    findIndexNode(index) {
        let iterator = this.head;

        for (let i = 0; i < index; i++) {
            iterator = iterator.next;
        }

        return iterator;
    }

// 데이터 정보를 이용한 링크드 리스트 노드 접근
    findNodeData(data) {
        let iterator = this.head;

        while(iterator !== null) {
            if (iterator.data === data) {
                return iterator;
            }
            iterator = iterator.next;
        }
        return null;
    }
//링크드 리스트 추가 연산
    insertAt(previousNode, data) { //추가하고자 하는 위치의 앞의 노드값과 추가하고자 하는 데이터 받음
        let node = new Node(data);

        if(previousNode === this.tail) {
            this.tail.next = node;
            this.tail = node;
        } else {
            node.next = previousNode.next;
            previousNode.next = node;
        }
    }

//링크드 리스트 헤드 부분에 추가    
    insertFist(data) {
        let node = new Node(data);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
//삭제하고자 하는 링크드 리스트의 이전 노드 값을 이용하여 노드 삭제
    delete(previousNode) {
        let data = previousNode.next.data;

        if (previousNode.next === this.tail){
            previousNode.next = null;
            this.tail = previousNode;
        } else{
            previousNode.next = previousNode.next.next
        }

        return data;
    }
//링크드 리스트의 head 노드 삭제
    popLeft() {
        let data = this.head.data

        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        return data;
    }
}

my_list = new LinkedList();

my_list.insertLast(2);
my_list.insertLast(3);
my_list.insertLast(4);
my_list.insertLast(5);
my_list.insertLast(6);
my_list.insertLast(7);

node_2 = my_list.findIndexNode(2);
console.log(my_list.delete(node_2));
console.log(my_list);
console.log(my_list.popLeft());
console.log(my_list);