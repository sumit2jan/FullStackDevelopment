const images = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const rollBtn = document.getElementById("rollBtn");

function rollDice(){
const value1 = Math.floor(Math.random() * 6);
const value2 = Math.floor(Math.random() * 6);
//console.log(value);

img1.src = images[value1];
img2.src = images[value2];

// Writing the code for an Upating the Player who have been won the Dice Game.

if(value1>value2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}else if(value2>value1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Its a Draw!";
}

}
rollDice();
rollBtn.addEventListener("click", rollDice);

