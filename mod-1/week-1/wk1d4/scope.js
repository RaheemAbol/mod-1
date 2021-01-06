var count = 0;
var x = 1;
console.log("before loop " +x);



function line5(){
    var x = 2;
    console.log("inside loop " +x);


if(count == 2)
break;
count++;

}

//function
console.log("after loop "+x);

function sum(x,y){
    return x + y;
}

var w=6, z=4;
console.log(sum(w,z));


//Prints even for numbers divisable by 2. Odd for the rest.
var x = [];
for ( i= 0; i <= 20;i++){ 
    x.push(i);
    if (i%2==0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}

// Return Area Function
const calculateArea = function(width,height) {
    const area = width * height;
    return area;
  }

  console.log(calculateArea(260,110));

  // Return Area Function es6
const calculateArea2 = (width,height) =>{
    const area = width * height;
    return area;
  }

  console.log(calculateArea2(26,11));

  