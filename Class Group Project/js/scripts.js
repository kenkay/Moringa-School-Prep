//KEN
$(document).ready(function() {
  $("#addLi").click(function() {
    $("p#food").text("Entree  1900");
    document.getElementById("genOrder").innerHTML = Math.floor(1000 * Math.random()) + 1
  });
  $("#addLi2").click(function() {
    $("p#food2").text("Entree  1900");
  });
});

//MICHEL
function populate(a, b) {
  var a = document.getElementById('day');
  var b = document.getElementById('food');
  b.innerHTML = "";
  if (a.value == "Monday") {
    var optionArray = ["|", "90|Githeri-Special", "150|Mukimo-Beef", "100|Ugali-Beef"]; //value|label
  } else if (a.value == "Tuesday") {
    var optionArray = ["|", "400|Pizza", "200|Air-Burgers", "60|Chips-and-Chicken", "70|Chips"];
  } else if (a.value == "Wednesday") {
    var optionArray = ["|", "400|KoreanBurger", "250|Grilled-Teriyaki-Burger", "200|Chips-and-Burger", "70|Chips"];
  } else if (a.value == "Thursday") {
    var optionArray = ["|", "70|Chips", "90|Rice-And-Peas", "90|Rice-and-Liver", "90|Chapati-Beef"];
  } else if (a.value == "Friday") {
    var optionArray = ["|", "80|Pasta", "120|Spaghetti-Meatballs", "180|Macaroni-and-Cheese"];
  }
  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    //console.log(pair);
    var newOption = document.createElement("option");
    newOption.value = pair[0];
    newOption.innerHTML = pair[1];
    b.options.add(newOption);
    $("#food").show();
  }

  $('option').click(function check_sm() {
    var b = document.getElementById('food');
    var sum = 0;

    for (var i = 0; i < optionArray.length; i++) {
      if (b[i].selected) {
        sum = (eval(sum) + eval(b[i].value))
      };
    }
    // alert("Total is" + sum);
    $('#price').val(sum);

  });
};

$(document).ready(function() {
  $("#calculate").click(function Confirm() {
    conf = confirm("Make Order?");
    if (conf == true) {
      console.log("yes")
    } else {
      console.log("no")
    }
  });
});
