let userClickedPattern = [];
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];


//Creating Function to detect the KeyDown Method
let level = 0;
let started = false;
$(document).keydown(function(){
    if(started == false){
    $("#level-title").text("Level "+level);
    nextSequence();
    started = true;
  }
})

 //Button Trigger Handling Function
    $(".btn").on("click",function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    }); 

  //Creating the new function to check the user answer against the game Sequence.
function checkAnswer(currentLevel){
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    console.log("Success")
  if (userClickedPattern.length === gamePattern.length){
        //Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
  }else{
    console.log("Failed");
    //Game Over Effects.
    playSound("wrong"); 
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);
    startOver();
  }
}

    
function nextSequence(){
    userClickedPattern = [];//empty kre hai array ko lalle
    level++;//Incrementing Level
    $("#level-title").text("Level " + level); //Changing the text of an h1

    // Adding level Names.
  if (level === 5) {
    showWarriorAlert("BEGINNER WARRIOR ⚔️");
    $("#level-title").text("Level 5: Beginner Warrior ⚔️");
  } 
  else if (level === 10) {
    showWarriorAlert("SHADOW KNIGHT 🛡️");
    $("#level-title").text("Level 10: Shadow Knight 🛡️");
  } 
  else if (level === 15) {
    showWarriorAlert("DRAGON SLAYER 🐉");
    $("#level-title").text("Level 15: Dragon Slayer 🐉");
  }
  else if (level === 20) {
    showWarriorAlert("IMMORTAL LEGEND 👑");
    $("#level-title").text("Level 20: Immortal Legend 👑");
  }
  else if (level === 25) {
    showWarriorAlert("MASTER OF TIME ⏳");
    $("#level-title").text("Level 25: Master of Time");
  }
  else if (level === 30) {
    showWarriorAlert("SIMON'S GOD ⚡");
    $("#level-title").text("Level 30: SIMON'S GOD");
    // Level 30 par party toh banti hai!
    level30Effect(); 
  }
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    // console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    // console.log(gamePattern);

    //Creating effect  flash Animation for the buttons.
    $("#"+randomChosenColour).fadeIn(150).fadeOut(150).fadeIn(150);

    // now implementing the Sound Function.
    playSound(randomChosenColour);

}

function showWarriorAlert(name) {
  $("#warrior-name").text(name); // Modal mein naam set karega
  $("#custom-alert").fadeIn(300).removeClass("hidden"); // Smoothly dikhayega
}

function closeAlert() {
  $("#custom-alert").fadeOut(300); // Smoothly band karega
}

function level30Effect() {
  let count = 0;
  let interval = setInterval(function() {
    $("body").toggleClass("game-over"); // Screen flash karegi party ki tarah
    count++;
    if (count === 10) clearInterval(interval);
  }, 100);
}

 //creating function to play the sounds
 function playSound(val){
   let audio = new Audio("sounds/" + val + ".mp3");
   audio.play();
 }

 //creating the funtion for Button Animation.
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// Game Restart Function
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
  userClickedPattern = [];
}
