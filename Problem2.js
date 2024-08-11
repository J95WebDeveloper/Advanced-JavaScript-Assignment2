//  Object Constructure call other Object Constructure

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Employee(name, age, designation) {
  Person.call(this, name, age);
  this.designation = designation;

  this.getDetails = () => {
    console.log(
      `Employee name is ${this.name} , age is ${this.age} and designation is ${this.designation}`
    );
  };
}

const Emp = new Employee("Raj", 28, "Gamer");
//  call the method
Emp.getDetails();
