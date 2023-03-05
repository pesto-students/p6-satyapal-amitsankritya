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

    reverse() {
        
        if (this.head === null || this.head.next === null) {
            return;
        }

        let previous = new Node(this.head.value); // take a head node to a variable

        let current = this.head.next;

        while(current) { // iterate from the second node
            var temp = new Node(current.value);
            temp.next = previous; // add previously iterated node to next of current node and swapss
            previous = temp;
            current = current.next;
        }

        this.head = previous;
    }

}

var list = new SingleLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.print();

//list.reverse();
list.reverse();
list.print();

var list = new SingleLinkedList();
list.append(2);
list.append(7);
list.append(8);
list.append(9);
list.append(10);
list.print();

list.reverse();
list.print();

// Time Complexity: O(N)
// Space Complexity: O(1)