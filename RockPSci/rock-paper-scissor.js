var randomNumber1=Math.floor(Math.random()*3+1);
var imageNumber="rock-paper-scissor-"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",imageNumber );

var randomNumber2=Math.floor(Math.random()*3+1);
var imageNumber2="rock-paper-scissor-"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[2];
image2.setAttribute("src", imageNumber2);

if(randomNumber1==1&& randomNumber2==3)
{
    document.querySelector("h2").innerHTML="Player 1 Won";
}
else if( randomNumber2==1 &&randomNumber1==3)
{
    document.querySelector("h2").innerHTML="Player 2 Won";
}
else if(randomNumber1<randomNumber2&&randomNumber2!=3)
    {
        document.querySelector("h2").innerHTML="Player 2 won";
}
else if( randomNumber1<randomNumber2&& randomNumber1!=1)
{
    document.querySelector("h2").innerHTML="Player 2 won"
}
else if(randomNumber2<randomNumber1&&randomNumber2!=3)
{
    document.querySelector("h2").innerHTML="Player 1 won"
}
//else if( randomNumber1< randomNumber2&& randomNumber1!=3)
else{
    document.querySelector("h2").innerHTML="Draw"
}
