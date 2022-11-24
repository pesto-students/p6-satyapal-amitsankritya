/* Call method: call() is used to modify the scope of 'this' inside the function.
* so 'this' is bound to the supplied object instead of global object, when function is called with call(). 
* Invoked immediately when called.
*/

//Example 1:

function Employee(name){
    console.log("Employee Details: " + name + " works in " + this.department + " since " + this.workingSince)
}

var emp1 = {
    department: "Finance",
    workingSince: 2010
}

var emp2 = {
    department: "QA",
    workingSince: 2015
}

Employee.call(emp1, "John Doe");
Employee.call(emp2, "Terresa");

// Example 2:

function Person (name, age) {
	this.name = name;
	this.age = age;
}

function Teacher(subject) {
	Person.call(this, "Joe", 45);
	this.teach = subject;

	console.log("Teacher " + this.name + " of age " + this.age + " teaches " + this.teach);
}

Teacher("Data Structure");