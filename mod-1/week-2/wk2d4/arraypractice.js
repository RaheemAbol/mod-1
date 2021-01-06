
 //

 //let arr1 = [1,2,3,4,5,6,7,8,9,10];
 let arr = [];

 for (let i = 0; i<51; i++){
     arr[i] = i;
 }

 console.log(arr)
// push

var shoppingList = ["cool ranch doritos", "kings hawaiian sweet bread", "peanut butter oreos", "fruit loops cereal"];

shoppingList.push("hendricks gin");

console.log(shoppingList);


// reverse
var yoda = ["try", "no", "is", "there", "not", "do", "or", "do"];

yoda.reverse();

console.log(yoda);

// number 4
var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing = "";

    for(var i = 0; i < waitList.length; i++) {
        nowServing = waitList[i];

        console.log("Now serving" + nowServing);
    }

// number 4 v-2
var waitList = [ "Chance the Rapper", "Khalid", "Tay-Tay", "Barry Manilow", "Piko Taro" ];
var nowServing = "";


for (var i=0 ;i <5; i++){
    nowServing = waitList.shift();
    console.log(nowServing);
    console.log(waitList);

}
console.log("Done")



// array to string

var shoe = ["just", "do", "it"];
shoeString = shoe.toString();
console.log(shoeString);
