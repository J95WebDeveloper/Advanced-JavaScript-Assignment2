// Polymorphism

class Shape {
  constructor() {}
  draw() {
    return this;
  }
}

class Circle extends Shape{
  constructor(radius) {
    super();
    this.radius = radius;
  }

  draw() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(height, weight) {
    super();
    this.height = height;
    this.weight = weight;
  }

  draw() {
    return this.height * this.weight;
  }
}

const circle = new Circle(10);
const rect = new Rectangle(8, 6);
console.log('Circle radius is : ', circle.draw());
console.log('Area of Rectangle is : ', rect.draw());
