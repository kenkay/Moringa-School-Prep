//backend logic
var add = function(num1, num2){
  var num3 = num1 + num2;
  return num3;
};

var subtract = function(num1, num2){
  var num3 = num1 - num2;
  return num3;
};

var multiply = function(num1, num2){
  var num3 = num1 * num2;
  return num3;
};


//frontend logic
$(document).ready(function(){
  $("#additionForm").submit(function(event){
    event.preventDefault();
    var userInputOne = parseInt ($("#addNumberOne").val());
    var userInputTwo = parseInt ($("#addNumberTwo").val());
    //val gets the value from an input
    var resultAdd = add(userInputOne, userInputTwo);
    $("#addOutput").text(resultAdd);
  });

  $("#subtractionForm").submit(function(event){
    event.preventDefault();
    var userInputSubOne = parseInt ($("#subNumberOne").val());
    var userInputSubTwo = parseInt ($("#subNumberTwo").val());
    //val gets the value from an input
    var resultSub = subtract(userInputSubOne, userInputSubTwo);
    $("#subOutput").text(resultSub);
  });

  $("#multiForm").submit(function(){
    event.preventDefault();
    var userInputMulOne = parseInt ($("#mulNumberOne").val());
    var userInputMulTwo = parseInt ($("#mulNumberTwo").val());
    var resultMul = multiply(userInputMulOne, userInputMulTwo);
    $("#mulOutput").text(resultMul);
  })
});
