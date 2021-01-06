//Create a class called Fish 
//Define a method Swim

class Fish {
  constructor(){
    this.swim = 'I can swim';
    this.ifScared = false;
  }
  method_swim(){
    return this.swim;
  }
}

Fish.prototype.ifScared = function() {
this.swimFaster = true;
console.log('AHHH Shark!!');
}
//Create a class Nemo that inherits from Fish
//Define an attribute color
class Nemo extends Fish {
  constructor(color) {
    super();
    this.color = color;
  }
}
var lilNemo = new Nemo('Yellow');
console.log(lilNemo);

//var dory = new Nemo('Blue')
//console.log(dory);