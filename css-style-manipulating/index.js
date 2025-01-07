
// before, after for adding new elements
var para2 = $("<p></p>").text("this is paragraph 2");
// $("#para1").after(para2);
$("#para1").before(para2);

// 2. attribute manipulation using jquery
var attributeValue = $("a").attr("href");
console.log(attributeValue);

$("a").attr("href", "https://vcampusbd.com/");
$("a").removeAttr("target");

// 3. css manipulate
$("h1").css("color", "tomato");

$("h2").css({ color: "green", "font-style": "italic" });

$("a").addClass("link-style");

// 4. event listener
$(".mybtn").click(function () {
  var value = this.innerHTML;
  $("#result").text(value + " is selected");
});

$(".mybtn").mouseover(function () {
  var value = this.innerHTML;
  $("#result").text(value + " is overed by mouse");
});

// 5. animation

// 6.
$(".demo2").parent().css("background-color", "green");
$(".my-div").children().css("color", "white");

// $("ol li:nth-child(2)").css("color", "green");
// $("ol li:nth-child(3)").css("color", "green");

$("ol li:odd").css("color", "blue");
// $("ol li:even").css("color", "green");

$("body").addClass("animated hinge");

/*

  css()
  remove()
  appendTo()
  css()
  addClass()


*/
