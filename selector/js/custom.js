// * selector ,Selects all elements
$(document).ready(function(){
  $("button").click(function(){
    $("*").hide();
  });
});

// $(this)	Selects the current HTML element
$(document).ready(function(){
  $("button").click(function(){
    $(this).hide();
  });
});

//  $("p.main")	Selects all <p> elements with class="main"
 $(document).ready(function(){
  $("button").click(function(){
    $("p.main").hide();
  });
});

// $("p:first")	Selects the first <p> element
$(document).ready(function(){
  $("button").click(function(){
    $("p:first").hide();
  });
});

// $("ul li:first")	Selects the first <li> element of the first <ul>

$(document).ready(function(){
  $("button").click(function(){
    $("ul li:first").hide();
  });
});

// $("ul li:first-child")	Selects the first <li> element of every <ul>

$(document).ready(function(){
  $("button").click(function(){
    $("ul li:first-child").hide();
  });
});

// $("tr:even")	Selects all even <tr> elements

$(document).ready(function(){
  $("tr:even").css("background-color", "yellow");
});

// $("tr:odd")	Selects all odd <tr> elements

$(document).ready(function(){
  $("tr:odd").css("background-color", "yellow");
});


// troggle 