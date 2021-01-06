
/*const vendingMachine = { //create arrays contains three elements with name: , and price:
  snacks: [
    {
      name : 'cookie',
      price : 3,
    },
    {
      name : 'M&M',
      price : 4,
    },
    {
      name : 'chocolate',
      price : 5,
    }
  ],
  vend (input){ //  it takes input as index of snacks array

    return (vendingMachine.snacks[input]);
  }// index of snacks
};
console.log(vendingMachine.vend(2)); //print index of vendingMachine with method vend index of 0,1,2
*/

//vending machine
class VendingMachine {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    vend(x) {
      return `You bought ${this.name[x]}` + ` for ${this.price[x]}.`;
    }
}

 const vendingMachine = new VendingMachine(
['Candy', 'Pop', 'chips'],
  [2,4,3]
);

console.log(vendingMachine.vend(0));


/*class Person {
    constructor (name, age, eyes, hair, lovesCats = true, lovesDogs) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
      this.lovesCats = lovesCats;
      this.lovesDogs = lovesDogs || true;
    }
    greet (otherPerson) {
      console.log('hi ' + otherPerson + '!');
    }
    setHair (hairColor) {
      this.hair = hairColor;
    }
    walk () {
      console.log('I hate when my Segway is in the shop.');
    }
  }
  
  const you = new Person('Matt', 36, 'blue', 'blonde');
  console.log(you);
  you.setHair('red');
  console.log(you);
  */
  
  
  
