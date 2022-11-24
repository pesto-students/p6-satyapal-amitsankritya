// Assignment 3.4: refactor code to implement encapsulation using closure

// Code to refactor

function createStack() {
    return{
        items:[],
        push(item) {
            this.items.push(item);
        },
        pop() {
            return this.items.pop();
        }
    };
}

const stack = createStack();


// refactored code

// Solution 1
function createStack1() {
    let items = [];

    function push(item) {
        return items.push(item);
    }

    function pop() { 
        return items.pop();
    }

    function getItems() {
        return items;
    }

    return[push, pop, getItems];
}
    
const stack1 = createStack1();
stack1.push(10);
stack1.push(5);
console.log(stack1.items); // output: undefined


// Solution 2
const createStack2 = () => {
    let items = [];

  return ({
      push: (item) => items.push(item),

      pop: () => items.pop(),

      getItems: () => items

    });
};

const stack2 = createStack2();

stack2.push(20);
stack2.push(25);
console.log(stack2.items); // output: undefined
console.log(stack2.getItems()); // output: [ 20, 25 ]

// Explanation: In both refactored functions the varable 'items' scope is that function only where it is defined
// and those functions will be able to access 'items' that are defined in the same scope, and also it is not part of the return body so scope is limited.
// In main function the item varibale was part of the return object when function called, thats why it is accessible outside.