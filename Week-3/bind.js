var employee = {
    firstName: "John",
    lastName: "Doe",
    joined: "1st Jan, 2018",
    getInfo: function() {
        console.log(this.firstName + " " + this.lastName + " working here since " + this.joined);
    }
}

var emp = employee.getInfo;
emp();
// output: undefined undefined working here since undefined
// here since get info is stored into another variable and called as a function, 'this' keword loses the scope here.

var empBound = employee.getInfo.bind(employee);
empBound();
// output: John Doe working here since 1st Jan, 2018
// above problem can be solved using bind(). using bind(), a new function can be created with the help of bind(), scope of 'this' will be the provided value
// and function can be called later any time. Usually in callbacks it is used when there is chance that in callback function might lose the 'this' or 'this' needs to be changed