
//Manuplating Style.
//$("h1").css("color","red"); not good.
$("h1").addClass("new-class")
//hasClass,removeClasss,("new-class new-classtwo")this is how we add two classes.


//Manuplating Text.
$("h1").text("HeHeHeHe")//to change the text.
$("h1").html("<em>hey</em>")//to use the html elements and change text.

//Manuplating Atrributes.
$("img").attr("src") //getting the value of an attribute
$("a").attr("href","https://www.w3schools.com/jquery/jquery_fade.asp").text("W3School"); // setting the value of an attribute.

//Adding EventListners to are JavaScript using Jquery.

$("h1").click(function(){
   $("h1").css("color","blue");
});

$("button").click(function(){
   $("h1").css("color","rgba(220, 40, 127, 1)");
});

$("body").keydown(function(){
    $("h1").css("color","rgba(40, 118, 220, 1)");
})