
//Create an Animal class. 
//The class will have name, age, color, legs, superPower attributes
//Create two objects of this class - both with a unique superPower
//create three methods for this class - include one method named userSuperPower()
//Create two objects for this class
class Animal{
    constructor(name,age,color,legs,superPower){
      this.name = name,
      this.age = age,
      this.color = color,
      this.legs = legs,
      this.superPower = superPower
    }
    userSuperPower(){
      console.log('This is my super power ' + this.superPower);
    }
    hunt(){
      console.log("On the hunt");
    }
    sleep(){
      console.log("I am sleeping");
    }
  }
  let dog= new Animal('bubba',4,'gold',4,'Able to consume anything in sight');
  let cat = new Animal('ty',14,'black',4,'Adamantium Nails');
  console.log(dog);
  dog.userSuperPower();
  dog.hunt();
  dog.sleep();

  console.log(cat);
  cat.userSuperPower();
  cat.hunt();
  cat.sleep();
 // Create a class name User
 // This class with have firstName, lastName, department attributes 
 // a method name changeDepartment()
// Create three instances of this class
 // Change department for two of the instances
 // Create three objects for this class
  

  class User {
    constructor(firstName, lastName, depAttributes) {
      this.firstName = firstName,
      this.lastName = lastName,
      this.depAttributes = depAttributes
    }
    changeDepartment(newDepartment){
      this.depAttributes = newDepartment;
    }
  }
  var user1 = new User('Mary','Elizabeth','Hairstylist')
  user1.changeDepartment('Pd');
  
  var user2 = new User('Dave','Snyder','Manager')
  user2.changeDepartment('Hr');
  
  var user3 = new User('Big','Bill','Bouncer')
  

  console.log(user1);
  console.log(user2);
  console.log(user3);



  