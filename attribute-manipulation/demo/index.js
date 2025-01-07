// 1. html selector and text manipulation
// using js
//  document.querySelector("h2").innerHTML = "hello";

// using jquery for selecting and changing text
// $("h2").text("hello");

$(".divM h2").text("bye");

// we can select multiple elements
$("#para1, h1").prepend("not this is");

$("#para1").html("<strong>hello i am strong paragraph</strong>");
$("#para1").html("<b>hello i am bold paragraph</b>");
$("#para1").prepend("start");
$("#para1").append("end");

// before, after for adding new elements
var para2 = $("<p></p>").text("this is paragraph 2");
$("#para1").before(para2);
// $("#para1").before(para2);

// 2. attribute manipulation using jquery
var attributeValue = $("a").attr("href");
console.log(attributeValue);

$("a").attr("href", "https://www.w3schools.com/");
$("a").removeAttr("target");

// 3. css manipulate
$("h1").css("color", "tomato");

$("h2").css({ "color": "green", "font-style": "italic" });

$("a").addClass("hrf-style");



// 5. animation



// $("ol li:nth-child(2)").css("color", "green");
// $("ol li:nth-child(3)").css("color", "green");

$("ol li:odd").css("color", "green");
// $("ol li:even").css("color", "green");

$("body").addClass("animated hinge");

/*

  css()
  prop()
  remove()
  appendTo()
  clone().appendTo()
  parent().css()
  child().css()
  addClass()


*/
