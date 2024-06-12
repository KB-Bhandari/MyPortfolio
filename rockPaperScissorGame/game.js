

let userScore=0;
let compScore=0;
let userwin= true;
const choices=document.querySelectorAll(".choice");
const rock=document.querySelector("#rock");
const paper=document.querySelector("#paper");
const scissor=document.querySelector("#scissor");
const reset=document.querySelector("#reset");

reset.addEventListener("click", function onClick()
{
    compScorPara.innerText=0;
    userScorePara.innerText=0;
})
function rockBeat()
{
    rock.style.backgroundColor="wheat";
    rock.style.color="black";
    rock.style.border="2px solid black";
    setTimeout(rockTime,300);
};
function rockTime()
{
    rock.style.backgroundColor="red";
};

function paperBeat()
{
    paper.style.backgroundColor="wheat";
    paper.style.color="black";
    paper.style.border="2px solid black";
   
    setTimeout(paperTime,300);
};

function paperTime()
 {
    paper.style.backgroundColor="red";
 };

 function scissorBeat(){
    scissor.style.backgroundColor="wheat";
    scissor.style.color="black";
    scissor.style.border="2px solid black";
    setTimeout(scissorTime,300);
};

function scissorTime()
 {
     scissor.style.backgroundColor="red";
     
 };
    

rock.addEventListener("click", function onClick(){
    rockBeat();
});


paper.addEventListener("click", function onClick(){
    paperBeat();
});

scissor.addEventListener("click", function onClick(){
    scissorBeat();
});

 
choices.forEach((choice) => {
    choice.addEventListener("click",() => {
    const userChoice=choice.getAttribute("id");
   
        playGame(userChoice);
        computerChoice();
    

    })
}
);

function compCall(compIndex)
{
    if(compIndex===0)
    {
       
        rockBeat();
    }
    else 
    if(compIndex===1){
        paperBeat();
    }
    else 
    if(compIndex===2){
       scissorBeat();
    }
    console.log("comp index"+compIndex);
};

function computerChoice (){
    const options=["rock","paper","scissor"];
    const compIndex=Math.floor(Math.random()*3);
     compCall(compIndex);
     
   //console.log("comp index"+compIndex);
    return options[compIndex];
    
    


};

const msg= document.querySelector("#msg");
const userScorePara=document.querySelector("#userScore");
const compScorPara=document.querySelector("#compScore");

const showWinner= (userwin) =>{
     
    if(userwin)
    {
        userScore++;
       msg.innerText="You win!!!";
       userScorePara.innerText=userScore;
       
              console.log("user won");
    }
    else
    {
        compScore++;
        compScorPara.innerText=compScore;
       msg.innerText="Computer Win!!!";
       
        console.log("Computer win");
    }
};

const drawCondition=()=>{
    msg.innerText="Game Draw";
       
    console.log("draw");
};
const playGame= (userChoice) => {
    console.log("User choice "+userChoice);
    const compChoice=computerChoice();
    console.log("computer choice "+compChoice);

    
        if(userChoice===compChoice)
        {
            drawCondition();

        }
        else {
        
        if(userChoice==="rock")
        {
            
            userwin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="scissor")
        {
            userwin=compChoice==="rock"?false:true;

        }
        else
        {
            userwin=compChoice==="scissor"?false:true;
        }
        showWinner(userwin);
    }
        
};

