// apply takes the 'this' value and single array of arguments (instead of individual argumenst as call(), call() and apply() both serves kind similar purpose)

function Student(subjects){
    console.log("Student " + this.name + " aged " + this.age + " studying in " + this.standard + " has opted for " + subjects.join(', ') + ".");
}

var st1 = {
    name: "John",
    standard: "10th",
    age: 15
};

studentSubject12Th = [
    "Physics",
    "Chemistry",
    "Math",
    "Biology",
    "English"
];

Student.call(st1, studentSubject12Th);

var st2 = {
    name: "David",
    standard: "12th",
    age: 17
};

studentSubject10Th = [
    "Physics",
    "Chemistry",
    "Math",
    "English"
];

Student.call(st2, studentSubject10Th);