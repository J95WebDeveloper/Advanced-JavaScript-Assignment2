//   Object Constructure

function Person(name, age){
         this.name = name;
         this.age = age;
         this.sayHello = function (){
            console.log(`Hello.. ${this.name}`)
         }
}

const person = new Person('Rahul', 20)
console.log(person)
// call the method
person.sayHello()