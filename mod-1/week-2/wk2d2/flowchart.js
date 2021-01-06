/*var num= 5;
var arr = [1,2,3,4,6,7,8];
var found = false;

for(i=0; i<arr.length; i++){
    if(arr[i]==num){
    console.log("found");
    found = true;
 }
}

if (found == false) {
    console.log("not found")
}*/

// practice alg

var toFind = -11;
var arr = [1,2,3,4,5,6,7,8,9,10];
var firstIndex = 0;
var lastIndex = arr.length-1; // last index of an array = array length - 1
var midIndex = 0;
var found = false;
while (firstIndex <= lastIndex){
  midIndex = parseInt((firstIndex+lastIndex)/2);
  if(arr[midIndex] == toFind){
    found = true;
    console.log("Found");
    break;
  } else if(arr[midIndex] < toFind){
    firstIndex = ++midIndex;
    console.log("firstIndex" + firstIndex); //test
  } else {
    lastIndex = --midIndex;
    console.log("lastIndex"+lastIndex); //test
  }
}
if(found == false){
console.log("Not Found");
}


/*
notes:
1: Learn about Data types
2: Learn about Logical operators
3: Learn about Mathmatical operators
4: Learn about conditionals
5: Learn about loops
6: Learn about procedural programming(functions)
7: Learn about arrays
8: Learn about Data structor
9: Learn about Algorithms
10: Learn about oop
11: Learn about Framework(react)
*/


