
//key 값을 문열로 받음;
function hash(string, storageSize) {
    let hash = 0;
    for(let i = 0; i < string.length; i++) {
        hash += string.charCodeAt(i);
    }
    return hash % storageSize;
}

//Node 생성 클래스
class Node {
    key;
    value;
    chain;

    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    setChain = (chain) => this.chain = chain;
}

//Hash 테이블 생성 클래스
class HashTable {
    size;
    storage;

    constructor(size) {
        this.size = size;
        this.storage = new Array(size);
    }
//추가 연산
    add = (key, value) => {
        const node = new Node(key, value);
        const index = hash(key, this.size);
//저장 공간이 비어있으면 해당 데이터 추가
        if(!this.storage[index]) {
            this.storage[index] = node;
//저장 공간에 데이터가 존재하면 충돌 함수 호출
        } else {
            this.collision(node, index);
        }
        return;
    }

    collision = (node, index) => {
        //노드 체인이 존재하지 않으면 저장 공간에 체인 마지막을 추가 데이터로 선정
        if(!node.chain) {
            this.storage[index].chain = node;
        } else {
            //재귀함수를 이용하여 체인 마지막으로 이동
            this.collision(node.chain, index);
        }
    }
//검색 함수
    lookUp = (key) => {
        //해쉬 함수를 이용하여 키에 맞는 인덱스 값 도출
        const index = hash(key, this.size);
        const foundNode = this.storage[index];
        if(foundNode.key === key) {
            return foundNode;
        } else {
            //체이닝 안쪽 데이터 검사
            return this.lookUpChain(foundNode.chain, key);
        }
    }

    lookUpChain = (node, key) => {
        if(node.key === key) {
            return node;
        } else {
            return this.lookUpChain(node.chain, key);
        }
    }

    counAll = () => {
        let count = 0;
        this.storage.map(each => count += this. countChains(each));
        return count;
    }

    countChains = (node) => {
        let eachCount = 0;
        if(!node) {
            return 0;
        } else {
            eachCount ++;
            eachCount += this.countChains(node.chain);
        }
        return eachCount;
    }
}

const hTable = new HashTable(23);
for (let i = 0; i < 17; i++) {
    hTable.add(`Node ${i}`, Math.random() * 10);
}

const data = hTable.lookUp('Node 3');

console.log("storage: ", hTable.storage);
console.log("count :", hTable.counAll());
console.log(data);