
for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" ,function(){
        var btt=this.innerHTML;
      makeSound(btt);
      buttonAnimation(btt);
     
  }

    );
}
    
document.addEventListener("keypress",function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key)
{
  switch(key)
  {
    case "q":
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case"w":
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play(); 
    break;
    case"e":
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case"r":
    var tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case("t"):
    var crash=new Audio("sounds/crash.mp3");
    crash.play();
    break;
    case ("y"):
        var snare=new Audio("sounds/snare.mp3");
        snare.play();
        break;
        case ("u"):
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    default : console.log("no keyyyy");

  

}
}
function buttonAnimation(currentKey)
{
  var buttonOn=document.querySelector("."+currentKey);
  buttonOn.classList.add("pressed");
   setTimeout(function (){
    buttonOn.classList.remove("pressed");
   }, 100);


}