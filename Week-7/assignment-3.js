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

    detectLoop() { // using two pointers
        var slowPointer = this.head;
        var fastPointer = this.head;

        while(slowPointer.next !== null && fastPointer && fastPointer.next !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;

            if(slowPointer === fastPointer) {
                return true;
            }
        }

        return false;
    }

    createLoop(x) {
        if(this.head == null || this.head.next == null) {
            return;
        }

        let current = this.head;
        let xthNode = null;
        let i = 1;
        while(current.next) {
            
            if(i == x) {
                xthNode = current;
            }

            current = current.next;
            i++;
        }

        current.next = xthNode;
    }
}

/* Example 1: 
Input:N = 3 value[] = {1,3,4} x = 2 
Output: True 
Explanation: In above test case N = 3.The linked list with nodes N = 3 is given. Then value of x=2 is given 
which means last node is connected with xth node of linked list. Therefore, there exists a loop
 */
var list = new SingleLinkedList();

list.append(1);
list.append(3);
list.append(4);

list.print();

list.createLoop(2);

console.log(list.detectLoop());


/* Example 2: 
Input:N = 4 value[] = {1,8,3,4} x = 0 
Output: False 
Explanation: For N = 4 ,x = 0 means then lastNode->next = NULL, then the Linked list does not contains any loop. */

var list = new SingleLinkedList();

list.append(1);
list.append(8);
list.append(3);
list.append(4);

list.print();

list.createLoop(0);

console.log(list.detectLoop());

// Time Complexity: O(N)
// Space Complexity: O(1)

