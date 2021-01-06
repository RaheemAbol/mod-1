// Remove the imposter - pop

var hof = ["Jordan", "Bird", "Kobe", "Duncan", "Iverson", "Bonner"];

var notHof = hof.pop();

console.log(notHof);

console.log(hof)

// splice

var testMenu = [
    "McPizza Burger",
    "McFly Burger",
    "McLinguine",
    "McChar-Siu Bau",
    "McChop-Chae",
    "McPancit"
    ];


testMenu.splice(2,2);
console.log(testMenu);

// concat

var westSide = ["Dre", "2Pac", "Snoop"];
var eastSide = ["Biggie", "Diddy", "Craig Mack"];

var oneLove = westSide.concat(eastSide);
console.log(oneLove);



// slice

var fbFriends = [
    "Khalid",
    "Yeezy",
    "Kimmy K",
    "Lamar Odom",
    "Lebron",
    "Warren Buffet"
    ];

    var unfriend = fbFriends.slice(1,4);

    console.log(unfriend)

// object

 let user1 = {

    first_name: "Raheem",
    
    last_name: "Abol",
    
    company: "perScholas",
    
    department: "Software Engineer"
    
    };

    console.log(user1)
