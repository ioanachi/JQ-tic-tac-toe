var $ = require("jquery");
$("document").ready(function() {
  var va1, va2, va3, vb1, vb2, vb3, vc1, vc2, vc3 = '';

  function vales(){
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
  function combinationarr (){
  var arr =[[va1,va2,va3], [vb1,vb2,vb3],[vc1,vc2,vc3],[va1,vb1,vc1], [va2,vb2,vc2],[va3,vb3,vc3], [va1,vb2,vc3], [va3,vb2,vc1]];

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
    console.log(va1,va2);
    combinationarr();

  });
  $("button").click(function(){
$("td").html(" ");
  });
});
