var $ = require("jquery");
$("document").ready(function() {
  var va1, va2, va3, vb1, vb2, vb3, vc1, vc2, vc3 = '';

  function vales() {
    va1 = $(".a1").html();
    va2 = $(".a2").html();
    va3 = $(".a3").html();
    vb1 = $(".b1").html();
    vb2 = $(".b2").html();
    vb3 = $(".b3").html();
    vc1 = $(".c1").html();
    vc2 = $(".c2").html();
    vc3 = $(".c3").html();
  }

  function combinationarr() {
    var arr = [va1, va2, va3, vb1, vb2, vb3, vc1, vc2, vc3];
    for (var i = 0; i < arr.length; i++) {
      if (i == 0 || i == 1 || i == 2) {
        var one = arr[i];
        var two = arr[i + 3];
        var three = arr[i + 6];
        if (one == "X" && two == "X" && three == "X") {
          $("h2").html("X wins");
        } else if (one == "0" && two == "0" && three == "0") {
          $("h2").html("O wins");
        }
      }else if (i == 0 || i == 3 || i == 6) {
          var one = arr[i];
          var two = arr[i + 1];
          var three = arr[i + 2];
          console.log(one, two, three, "boooooooooooooo");

          if (one == "X" && two == "X" && three == "X") {
            $("h2").html("X wins");
          } else if (one == "0" && two == "0" && three == "0") {
            $("h2").html("O wins");
          }
        } else if (i == 0) {
          var one = arr[i];
          var two = arr[i + 4];
          var three = arr[i + 8];
          if (one == "X" && two == "X" && three == "X") {
            $("h2").html("X wins");
          } else if (one == "0" && two == "0" && three == "0") {
            $("h2").html("O wins");
          }
        } else if (i == 2) {
          var one = arr[i];
          var two = arr[i + 2];
          var three = arr[i + 4];
          if (one == "X" && two == "X" && three == "X") {
            $("h2").html("X wins");
          } else if (one == "0" && two == "0" && three == "0") {
            $("h2").html("O wins");
          }
        }

    }
  }

  var isx = true;
  $("td").click(function() {
    vales();
    var cval = $(this).html();
    if (!(cval == "X" || cval == "0")) {
      if (isx) {
        $(this).html("X");
        isx = false;
      } else {
        $(this).html("0");
        isx = true;
      }
    }
    vales();
    console.log(va1, va2, "naspa");
    combinationarr();

  });
  $("button").click(function() {
    $("td").html(" ");
  });
});
