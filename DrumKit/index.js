const button = document.querySelectorAll(".drum");
for(let i = 0; i<button.length; i++){ 
button[i].addEventListener("click",function(){
    let btnInnerhtml = this.innerHTML;
    makeSound(btnInnerhtml);
    buttonAnimation(btnInnerhtml);
});
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
   switch (key) {
        case "w":
            let Sound1 = new Audio("sounds/tom-1.mp3");
            Sound1.play();
            break;
        case "a" :
            let Sound2 = new Audio("sounds/tom-2.mp3");
            Sound2.play();
            break;
        case "s" :
            let Sound3 = new Audio("sounds/tom-3.mp3");
            Sound3.play();
            break;
        case "d" :
            let Sound4 = new Audio("sounds/tom-4.mp3");
            Sound4.play();
            break;
        case "j" :
            let Sound5 = new Audio("sounds/snare.mp3");
            Sound5.play();
            break;
        case "k" :
            let Sound6 = new Audio("sounds/crash.mp3");
            Sound6.play();
            break;
        case "l" :
            let Sound7 = new Audio("sounds/kick-bass.mp3");
            Sound7.play();
            break;
        default: console.log(btnInnerhtml);
            
    }
}

function buttonAnimation(value){
    let activebutton = document.querySelector("."+value);
    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    },100);
}

// document.addEventListener('keydown', function(event) {
    
//     if (event.key === 'w') {
//         event.preventDefault(); 
//         let Sound1 = new Audio("sounds/tom-1.mp3");
//         Sound1.play();
//     }
//     if (event.key === 'a') {
//         event.preventDefault(); 
//         let Sound2 = new Audio("sounds/tom-2.mp3");
//         Sound2.play();
//     }
//     if (event.key === 's') {
//         event.preventDefault(); 
//         let Sound3 = new Audio("sounds/tom-3.mp3");
//         Sound3.play();
//     }
//     if (event.key === 'd') {
//         event.preventDefault(); 
//         let Sound4 = new Audio("sounds/tom-4.mp3");
//         Sound4.play();
//     }
//     if (event.key === 'j') {
//         event.preventDefault(); 
//         let Sound5 = new Audio("sounds/snare.mp3");
//         Sound5.play();
//     }
//     if (event.key === 'k') {
//         event.preventDefault(); 
//         let Sound6 = new Audio("sounds/crash.mp3");
//         Sound6.play();

//     }
//     if (event.key === 'l') {
//         event.preventDefault(); 
//         let Sound7 = new Audio("sounds/kick-bass.mp3");
//         Sound7.play();
//     }
// });