const maxHeapify = (arr, n, i) => {
    let largest = i;
    let l = 2 * i + 1; //left child index
    let r = 2 * i + 2; //right child index

    //If left child is smaller than root
    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }

    // If right child is smaller than smallest so far 
    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }

    // If smallest is not root 
    if (largest != i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        // Recursively heapify the affected sub-tree 
        maxHeapify(arr, n, largest);
    }
}

const reverseHeapify = (arr, i) => {
    let partentIndex = Math.floor(i / 2);
    let n = arr.length;
    
    if ((0 < partentIndex && partentIndex < n) && arr[partentIndex] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[partentIndex];
        arr[partentIndex] = temp;
        reverseHeapify(arr, partentIndex);
    }
}

class PriorityQueue {
    constructor(){
        this.heap = [null];
    }

    insert = (data) => {
        this.heap.push(data);
        reverseHeapify(this.heap, this.heap.length-1)
    }

    extractMax = () => {
        let temp = this.heap[1];
        this.heap[1] = this.heap[this.heap.length - 1];
        this.heap[this.heap.length - 1] = temp;
        let max_value = this.heap.pop();
        maxHeapify(this.heap, this.heap.length, 1);
        return max_value
    }
}

const priorityQueue = new PriorityQueue();

priorityQueue.insert(6);
priorityQueue.insert(9);
priorityQueue.insert(1);
priorityQueue.insert(3);
priorityQueue.insert(10);
priorityQueue.insert(11);
priorityQueue.insert(13);

console.log(priorityQueue.extractMax());
console.log(priorityQueue.extractMax());
console.log(priorityQueue.extractMax());
console.log(priorityQueue.extractMax());
console.log(priorityQueue.extractMax());
console.log(priorityQueue.extractMax());
console.log(priorityQueue.extractMax());