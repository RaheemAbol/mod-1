
//Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
// Write a function called circle_area that returns the area of the object. 
//Write a function total_sides that returns the number of sides of the object.
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  circle_area() {
    return Math.PI * this.radius * this.radius;
  }
  total_sides(){
    return "....I dont have sides"
  }
}

let cir1 =  new Circle(5);
console.log('The area of this circle is ' + cir1.circle_area());
console.log('This circles sides ' + cir1.total_sides());

//Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
//Write a function called rectangle_area that returns the area of the given object.
//Write a function total_sides that returns the number of sides of the object.
class Rectangle {
  constructor(width,height) {
    this.width = width;
    this.height = height;
  }
  rectangle_area(){
    return this.width * this.height;
  }
  total_sides(){
    return 4
  }
}
let rec1 = new Rectangle(15,5);
console.log('The area of this rectangle is ' +rec1.rectangle_area());
console.log('The Sides are... ' +rec1.total_sides());

//Define a new class called Square with appropriate attributes and instantiate a few Square objects.
//Write a function called square_area that returns the area of the given object.
//Write a function total_sides that returns the number of sides of the object.

class Square {
  constructor(side) {
    this.side = side;
  }
square_area(){
  return this.side * this.side;
}
total_sides(){
  return 4
 }
}
let square1 = new Square(6);
console.log('The area of this circle is '+ square1.square_area());
console.log('The Sides are..'+ square1.total_sides());


