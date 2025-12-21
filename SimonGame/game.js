let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
function nextSequence(){

    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    // console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);

    //Creating effect  flash Animation for the buttons.
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // now implementing the Sound Function.
    playSound(randomChosenColour);

}
 //creating function to play the sounds
 function playSound(val){
   let audio = new Audio("sounds/" + val + ".mp3");
   audio.play();
 }

 
 $(document).keydown(function(){
    nextSequence();
}); 
//  nextSequence();
