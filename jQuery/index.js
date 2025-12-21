
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

// $("h1").click(function(){
//    $("h1").css("color","blue");
// });

$("h1").on("click",function(){// more flexible way to add eventListner into are websites.
   $("h1").css("color","rgba(220, 148, 40, 1)");
});

$("button").click(function(){
   $("h1").css("color","rgba(220, 40, 127, 1)");
});

$("body").keydown(function(event){
    $("h1").css("color","rgba(40, 118, 220, 1)");
    $("h1").text(event.key);
})

//Adding and removing the elements with jQuery.
$("h1").before("<button> newbtn </button>")
// before,after,prepend,append. like before we have all this two in are jQuery.
//and to remove we have simple remove() method. like
$("img").remove();   


//Website Annimations With an jQuery

//we have hide() method to hide.
// toggle() to switch between hide and unhide.

//we also have the fadeIn(),fadeOut(), and fadeToggle();

// $("button").on("click",function(){
//     $("h1").fadeToggle();
// });

//we also have the slideUp(),slideDown(), and slideToggle();


// how to add an a custom css for an animation.
//we use animate method to do that 
$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
}); 

// .fadeOut(100).fadeIn(100); we can use timeout like this in the Projects.