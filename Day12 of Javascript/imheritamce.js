class Student {
  constructor(name) {
    this.name = name;
  }
  display() {
    console.log("Name of the student is " + this.name);
  }
}

class College extends Student {
  constructor(name, college) {
    super(name);
    this.college = college;
  }
  display() {
    super.display();
    console.log("College of the student is " + this.college);
  }
}

let s = new College("jadwbjd", "IIt ");
s.display();
/* `s.display();` is calling the `display()` method on the object `s`, which is an instance of the
`College` class. This method first calls the `display()` method of the superclass `Student` using
`super.display()`, which prints the name of the student. Then, it prints the college of the student.
So, when `s.display();` is called, it will output: */

let x = new Student("abc");
x.display();

/* `let x = new Student("abc");` is creating a new instance of the `Student` class with the name "abc"
and assigning it to the variable `x`. This statement is creating a new student object with the name
"abc" using the constructor of the `Student` class. */
