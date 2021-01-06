function add() {
    var num1 = document.getElementById("number1").value ;
    var num2 = document.getElementById("number2").value ;
    var result = parseInt(num1)+parseInt(num2);
    document.getElementById("result").value = result;
   }
   function subtract() {
     var num1 = document.getElementById("number1").value ;
     var num2 = document.getElementById("number2").value ;
     var result = parseInt(num1)-parseInt(num2);
     document.getElementById("result").value = result;
    }
    function multiply() {
      var num1 = document.getElementById("number1").value ;
      var num2 = document.getElementById("number2").value ;
      var result = parseInt(num1)*parseInt(num2);
      document.getElementById("result").value = result;
     }
     function divide() {
       var num1 = document.getElementById("number1").value ;
       var num2 = document.getElementById("number2").value ;
       var result = parseInt(num1)/parseInt(num2);
       document.getElementById("result").value = result;
      }