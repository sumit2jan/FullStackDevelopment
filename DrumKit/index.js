const button = document.querySelectorAll(".drum");
for(let i = 0; i<button.length; i++){ 
button[i].addEventListener("click",function(){
    
    let btnInnerhtml = this.innerHTML;
    switch (btnInnerhtml) {
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
});
}