function playSounds( num) {
    var play = new Audio("sounds/" + num + ".mp3");
    play.play();
    
}
function animationBtn( color){
    $("#"+ color).addClass("pressed");
    setTimeout(() => {
    $("#"+ color).removeClass("pressed");
   }, 200);
}
function wrongClick(){
    const fail = new Audio ("sounds/wrong.mp3");
    fail.play();
    $("body").addClass("game-over");
    setTimeout(() => {
       $("body").removeClass("game-over");
   }, 200);
}
var h = 0;
var sounds = ["green", "red", "yellow" , "blue" ];
var userClickedWholeTime = [];
var arrColor= [];
var start = false;

$(".btn").on("click", function(){
 const active = $(this).attr("id");

 playSounds(active);
 animationBtn(active);
 userClickedWholeTime.push(active);
 checkAnwser(userClickedWholeTime.length-1);

});  

function checkAnwser(currentColor){
  if(userClickedWholeTime[currentColor] === arrColor[currentColor]){
    if(userClickedWholeTime.length === arrColor.length){
        setTimeout(() => {
            nextSquence();
        }, 1000);
     
    }
  }
  else{
    wrongClick()
    $("h1").text("Gameover, Press key to restart");
    start = false;
    h = 0;
    arrColor = [];
  }
}

$(document).keypress( function(event){
   if(!start){
      nextSquence();
      start = true;
   }

});

function nextSquence(){
  userClickedWholeTime = [];
  hear = false;
  h++;
  $("h1").text("LEVEL" + h)
  var randomColor = Math.floor(Math.random()*4);
  arrColor.push(sounds[randomColor]);
  playSounds(sounds[randomColor]);
  animationBtn(sounds[randomColor]);

}