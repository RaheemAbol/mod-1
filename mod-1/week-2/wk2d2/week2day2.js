
/*Prints even for numbers divisable by 2. Odd for the rest.
var x = [];
for ( i= 0; i <= 20;i++){ 
    x.push(i);
    if (i%2==0){
        console.log("Even")
    }
    else{
        console.log("Prime")
    }
}*/



  // Prints out prime numbers 0-20
var i = 1;
var j = 2;

while (i <= 20){
    if (i%j==0){
        console.log(i);
        i++;
    }
}