$(document).ready(function(){
  var rotate = function(){
    $(".demo1 .rotate").textrotator({
        animation: "flipCubeUp",
        speed: 1000
      });
  }

  rotate();
});