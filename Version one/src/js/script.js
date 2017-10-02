var $ = require("jquery");
$("document").ready(function() {


  var isx = true;
  var va1, va2, va3, vb1, vb2, vb3, vc1, vc2, vc3 = '';
  function iavalori(){
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

  function cheama() {
    var cond1 = (va1 == "X" && va2 == "X" && va3 == "X");
    var cond2 = (vb1 == "X" && vb2 == "X" && vb3 == "X");
    var cond3 = (vc1 == "X" && vc2 == "X" && vc3 == "X");
    var cond4 = (va1 == "X" && vb1 == "X" && vc1 == "X");
    var cond5 = (va2 == "X" && vb2 == "X" && vc2 == "X");
    var cond6 = (va3 == "X" && vb3 == "X" && vc3 == "X");
    var cond7 = (va3 == "X" && vb2 == "X" && vc1 == "X");
    var cond8 = (va1 == "X" && vb2 == "X" && vc3 == "X");

    if (cond1 || cond2 || cond3 || cond4 || cond5 || cond6 || cond7 || cond8) {
      $("h2").html("X wins");
    };



    var cond01 = (va1 == "0" && va2 == "0" && va3 == "0");
    var cond02 = (vb1 == "0" && vb2 == "0" && vb3 == "0");
    var cond03 = (vc1 == "0" && vc2 == "0" && vc3 == "0");
    var cond04 = (va1 == "0" && vb1 == "0" && vc1 == "0");
    var cond06 = (va3 == "0" && vb3 == "0" && vc3 == "0");
    var cond05 = (va2 == "0" && vb2 == "0" && vc2 == "0");
    var cond07 = (va3 == "0" && vb2 == "0" && vc1 == "0");
    var cond08 = (va1 == "0" && vb2 == "0" && vc3 == "0");
    if (cond01 || cond02 || cond03 || cond04 || cond05 || cond06 || cond07 || cond08) {
      $("h2").html(" O wins");
      $(".a1").addClass("clX");
      $(".a3").addClass("clX");
      $(".a2").addClass("clX");

    };
  };

  $("td").click(function() {
iavalori();


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

    iavalori();

    cheama();



  });
  $("button").click(function(){
$("td").html(" ");






  });
});
