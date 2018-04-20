$(document).ready(function(){
  $("#addH2").click(function(){
    $("#headerTwoTag").html("<h2> Header Two Tag Added</h2>");
      //replace with the line below for .text method to work
      //$("#headerTwoTag").text("Header Two Tag Added");
  });

  $("#addLi").click(function(){
    $("ul").prepend("<li> Chow </li>");
  });


  $("#addH3").click(function(){
    $("body").css("background-color", "black");
    $("p").add("h2").add("li").add("h1").css("color", "white");
    $(".jumbotron").css("background-color","black");
  });

});
