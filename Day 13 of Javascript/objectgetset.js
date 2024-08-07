let x = {
  firstName: "sachin",
  lastName: "kumar",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName.toUpperCase();
    this.lastName = lastName.toUpperCase();
  },
};

let s = Object.create(x);

s.fullName = "sachin kumar";

console.log(s.fullName);
