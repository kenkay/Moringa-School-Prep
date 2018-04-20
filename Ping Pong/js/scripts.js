//Script for first behavior for the program
//frontend
$(document).ready(function() {
  $("form#pingToPong").submit(function(event) {
    event.preventDefault();
    var pong = parseInt($("input#pings").val());
    var result = output(pong);
    var arr = [];
    arr.push(result);
    for (var i = 0; i < arr.length; i++) {
      $("#outList").append("<li>" + arr[i] + "</li>");
    }
  });
});


//backend
var output = function(pong) {
  if ((pong % 3 === 0 && pong % 5 === 0)) {
    return ("pingpong");
  } else if ((pong % 5 === 0)) {
    return ("pong")
  } else if ((pong % 3 === 0)) {
    return ("ping")
  } else {
    return pong;
  }

};

//Script for second behavior for the program
//backend
function array_ping(num) {
  var List = [];
  for (i = 1; i <= num; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      List.push("pingpong");
    } else if (i % 3 === 0) {
      List.push("Ping");
    } else if (i % 5 === 0) {
      List.push("pong");
    } else {
      List.push(i);

    }
  }
  return List;
}
//frontend
$(document).ready(function() {
  $("form#array_Pong").submit(function(event) {
    event.preventDefault();
    $("ul#output").empty();
    var num = parseInt($("input#pPings").val());
    var List = array_ping(num);
    List.forEach(function(item) {
      $("ul#output").append("<li>" + item + "</li>");
    });


  });

});
