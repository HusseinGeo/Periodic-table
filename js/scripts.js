//$(document).ready(function() {
  //  //    $("button#green").click(function() {
    //      $("body").addClass("green-background");
        //});
//
  //      $("button#yellow").click(function() {
    //      $("body").addClass("yellow-background");
      //  });
//
  //      $("button#red").click(function() {
    //      $("body").addClass("red-background");
      //  });
    //})
  $(document).ready(function() {

    $("#owl-demo").owlCarousel({

      autoplay:8000, // set Autoplay to 3 seconds
       pagination:true,
       navigation:true,
      items:3,
      itemsDesktop: [1199,3],
      itemsDesktopsmall: [979,3],

    });

  });
