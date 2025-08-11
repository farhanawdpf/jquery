// text method
$(document).ready(function(){
  $("button").click(function(){
    $("p").text("Hello world!");
  });
});

// hide and show method

$(document).ready(function(){
    $("#hide").click(function(){
      $("p").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
  });

//   Toggle between hiding and showing the paragraphs
  $(document).ready(function(){
    $("button").click(function(){
      $("p").toggle();
    });
  });
