numberOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       clickedButton=this.innerHTML;
       pressed(clickedButton);
       addAnimation(clickedButton);
    })
}
document.addEventListener("keypress",function(event){
    
    pressed(event.key);
    addAnimation(event.key)
    
});

function pressed(key){
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;      
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
         case "j":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break; 
         case "k":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break; 
        case "l":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        default:
            break;
        
    }
}
                
function addAnimation(currentKey){
    var activeKey=document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function() {
      activeKey.classList.remove("pressed");  
    }, 100);
}