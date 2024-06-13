var randomNumber1=Math.floor(Math.random()*6 +1);

var diceImage_1="dice"+randomNumber1+".png";
var image_1=document.querySelectorAll("img")[0];
image_1.setAttribute("src", diceImage_1);


var randomNumber2=Math.floor(Math.random()*6 +1);
var diceImage_2="dice"+randomNumber2+".png";
var image_2=document.querySelectorAll("img")[1];
image_2.setAttribute("src", diceImage_2);

if(diceImage_1>diceImage_2){
    document.querySelector("h3").innerHTML="Player 1 Won";
    
}
else if(diceImage_1<diceImage_2){
    document.querySelector("h3").innerHTML="Player 2 Won";
}
else
{
    document.querySelector("h3").innerHTML="Draw"}