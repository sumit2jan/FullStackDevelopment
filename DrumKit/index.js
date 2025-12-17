let len = document.querySelectorAll(".drum").length;
for(let i = 0; i<len; i++){ 
document.querySelectorAll("button")[i].addEventListener("click",function(){
    alert("Button clicked");
});
}