var userClickedPattern = [];

$(".btn").click(function(){
var userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);

});



var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {

   var randomNumber = Math.floor(Math.random() * 4);

   var randomChosenColour = randomNumber [buttonColours];

   gamePattern.push(randomChosenColour);

   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
   audio.play();

   
}




