var num_of_buttons=document.querySelectorAll(".drum").length;
//detection button presss
for (let i = 0; i < num_of_buttons; i++) {
   document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttoninnerhtml=this.innerHTML;
    makesound(buttoninnerhtml);
    buttonanimation(buttoninnerhtml);
 });
}


//detection of which key wass press by keydown (also we can use keypress)
document.addEventListener("keydown",function(event){
    makesound(event.key);
    buttonanimation(event.key);
});

function makesound(key){
switch (key) {
        case "w":{
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;}
        case "a":{
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;}
        case "s":{
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;}
        case "d":{
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;}
        case "j":{
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;}
        case "k":{
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;}
        case "l":{
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;}
        default:{
            console.log(buttoninnerhtml);
            break;}
    }
}

function buttonanimation(currentkey){
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
      activebutton.classList.remove("pressed");
    },100);
}

//using if-else case
/* var choose_audio;
     if(i<4){
         choose_audio="sounds/tom-"+(i+1)+".mp3";
     }else if(i==4){
         choose_audio="sounds/snare.mp3";
     }else if(i==5){
         choose_audio="sounds/crash.mp3";
     }else{
         choose_audio="sounds/kick-bass.mp3";
     }
     var audio=new Audio(choose_audio);
     audio.play();
*/