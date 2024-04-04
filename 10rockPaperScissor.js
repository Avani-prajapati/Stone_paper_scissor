let game=document.querySelector(".game");
let start=document.querySelector(".start");
let home=document.querySelector(".home");
let choise=document.querySelectorAll(".choise");
let uc=document.querySelector("#userScore");
let cc=document.querySelector("#comScore");
let rd=document.querySelector(".result-display");
let userdisplay=document.querySelector(".uc");
let comdisplay=document.querySelector(".cc");
let goToHome=document.querySelector(".goToHome");
let reset=document.querySelector(".reset");
let position=document.querySelector(".position");
let userScore=0;
let comScore=0;

choise.forEach((choise)=>{
    choise.addEventListener("click",()=>{
    let userChoise=choise.getAttribute("id")
    let comChoise=generateChoise();
    console.log(userChoise);
    console.log(comChoise);
     let result=checkWiner(userChoise,comChoise);
     scoreChange(result,userChoise,comChoise);
    })
})
reset.addEventListener("click",()=>{
    userScore=0;
    comScore=0;
    cc.innerText=`${comScore}`;
    uc.innerText=`${userScore}`;
    userdisplay.innerText="";
    comdisplay.innerText="";
    rd.innerText="Play game!";
    rd.style.backgroundColor="rgb(105, 105, 156)";

})
goToHome.addEventListener("click",()=>{
 game.classList.add("hide");
home.classList.remove("hide");
userScore=0;
comScore=0;
cc.innerText=`${comScore}`;
uc.innerText=`${userScore}`;
userdisplay.innerText="";
comdisplay.innerText="";
rd.innerText="Play game!";
rd.style.backgroundColor="rgb(105, 105, 156)";

})
let scoreChange=(result,userChoise,comChoise)=>{
    if(result=="-1")
     {comScore++
        console.log(comScore);
      cc.innerText=`${comScore}`;
      rd.innerText=" YOU LOSE 😔";
      rd.style.backgroundColor="red";
      userdisplay.innerText=`${userChoise}`;
      comdisplay.innerText=`${comChoise}`;
    }
    else if(result=="1")
     {userScore++
        console.log(userScore);
      uc.innerText=`${userScore}`;
      rd.innerText=" YOU WIN 🥳";
      rd.style.backgroundColor="green";
      userdisplay.innerText=`${userChoise}`;
      comdisplay.innerText=`${comChoise}`;
    }
    else{
        userdisplay.innerText=`${userChoise}`;
        comdisplay.innerText=`${comChoise}`;
        rd.style.backgroundColor="rgb(105, 105, 156)";
        rd.innerText="MATCH DRAW PLAY AGAIN 😀";
    }
    
}
let checkWiner=(uc,cc)=>{
  if(cc==uc){
  return 0
  }
  else{
   if(uc=="rock"){
     let r=cc == "paper" ? -1 : 1;
     return r;
     }
    else if(uc=="paper"){
        let r=cc == "scissor" ? -1 : 1;
        return r;
    }
    else{
        let r=cc == "rock" ? -1 : 1;
        return r
        }
  }
}
let generateChoise=()=>{
  let arr=["rock","paper","scissor"];
  let index= Math.floor(Math.random()*3);
  return arr[index];
}

start.addEventListener("click",()=>{
  game.classList.remove("hide");
  home.classList.add("hide");
})