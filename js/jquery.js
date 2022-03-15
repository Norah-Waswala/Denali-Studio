// Design click function

$(document).ready(function() {
    $(".designImg").click(function() {
      $("#design").toggle();
      $(".designImg").toggle();
    });
    $("#design").click(function(){
        $(".designImg").toggle();
        $("#design").toggle();

    });
    $(".devImg").click(function() {
        $("#dev").toggle();
        $(".devImg").toggle();
      });
      $("#dev").click(function(){
          $(".devImg").toggle();
          $("#dev").toggle();
  
      });
      $(".manImg").click(function() {
        $("#product-m").toggle();
        $(".manImg").toggle();
      });
      $("#product-m").click(function(){
          $(".manImg").toggle();
          $("#product-m").toggle();
  
      });
});

