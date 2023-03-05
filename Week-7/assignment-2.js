class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
    }

    append(element) {
        const node = new Node(element);
        console.log(node);
        if (this.head == null) { // if head is null, set node to head
            this.head = node;
        } else { // if head is not null, iterate each and set the node to next of last node
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node; 
        }
    }

    print() {
        var current = this.head;
        let linkedList = "";
        while (current !== null) {
            linkedList = linkedList + current.value + "->";
            current = current.next;
        }

        console.log(linkedList);
    }

    rotate(k) {
        let previousHead = this.head; // keep track of previous head
        let previous = this.head; // keeping track of previous and current in iteration
        let current = this.head;

        let i = 0;

        while(current.next){ // i = 4
            if(i == k){
                this.head = current; // when reached Kth position, make the current node head
                previous.next = null; // and set next of prevous node to null (to make it last), previousHead is having K number of nodes
            }

            previous = current; // making current one previous
            current = current.next; // moving on to next

            i++;
        }

        current.next = previousHead; // add remaining previousHead Node to the rotated node
    }
}

var list = new SingleLinkedList();

list.append(2);
list.append(4);
list.append(7);
list.append(8);
list.append(9);
list.print();

list.rotate(3);
list.print();

var list = new SingleLinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.print();

list.rotate(4);
list.print();

// Time Complexity: O(N)
// Space Complexity: O(1)