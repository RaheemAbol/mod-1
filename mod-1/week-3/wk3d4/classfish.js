 //*
 class Person {
    // feilds
    constructor (First_Name, Last_Name, Country, City){
      this.firstName = First_Name,
      this.lastName = Last_Name,
      this.country = Country,
      this.city = City
    }
    // methods
    greet (otherPerson){
      console.log("hi " + otherPerson + "!");
    }
    walk(){
      console.log("I hate when segway is in the shop.");
    }
  }
  const raheem = new Person("Raheem","Abolfathzadeh", "USA", "Cincinnati");
  console.log(raheem);
 // raheem.greet("Salah");
  raheem.walk();
  raheem.firstName = "Perscholas";
  console.log(raheem);

  ////primitive types var x = 5;  
  ////refernece types



  class Fish {
    constructor(age) {
      this.age = age;
  
    }
    swim (){
      console.log("The sailfish is the fastest fish in the world – able to swim at a speed of 68mph");
    }
  }
  const fish = new Fish (2);
  fish.swim();
  console.log(fish);
  class Nemo extends Fish {
    constructor(age,color) {
    super(age);
    this.color = color;
    }
    canItSwim(){
      this.swim = true;
      }
    }
  
  
  const nemo = new Nemo (22,"blue");
  nemo.swim();
  nemo.canItSwim("");
  console.log(nemo);
  