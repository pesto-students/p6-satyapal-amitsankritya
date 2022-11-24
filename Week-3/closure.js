// Assignment 3.3: Output of below and why

function createIncrement() {
    let count = 0;

    function increment() {
        count++;
    }

    // increment(); will change the count value for message

    let message = `Count is ${count}`;

    function log() { 
        console.log(message);
    }

    return[increment, log];
}


const[increment, log] = createIncrement();

increment(); // will increment count to 1
increment(); // will increment count to 2
increment(); // will increment count to 3
log(); //Output: Count is 0


// Explanation: when createIncrement() is called it is returning two functions, 
// value of count at the time message string is generated is 0 
// no matter how many times increment() is called outside the createIncrement(), it will not change the value of count for message variable.
// it can change the value if it is called just before message variable as commented line in function, or message is generated inside increment() function.
// so it is basically how a variable holds or chnages its value based on its scope
