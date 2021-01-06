//function

function theSum(x,y){
    return x + y;
};

//main
var sum;
sum = theSum(10,10)

console.log(sum);

//function 2
function oddEven(x){
    if(x%2==0)
        return "Even";
    else{
        return "odd"
    }
};

//main 2
console.log(oddEven(-11583));

//function 3
function addThree(x,y,z){
    return x + y + z;
};

//main 3
console.log(addThree(1,2,3));

//function 4

var se = 30;

function printX(){
    var x = 3;
    console.log("x whithin printX" +x);
    console.log("calling printY" +printY());

    function printY(){
        var y = 5;
        console.log("Y within printY" +y);
        return y;
    }
    return x;
};

console.log("se" +se);
