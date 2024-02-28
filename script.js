let us=0;
let cs=0;
const  msg=document.querySelector("#msg1");
const userscore=document.querySelector("#s1");
const compscor=document.querySelector("#s2");

const gencompchoice = () => {
     let opt=["rock","paper","scissors"];
    const rc= Math.floor(Math.random()*3);
    return opt[rc];
}
const showwinner = (userwin, cid,cc) => {
     if(userwin){
        us++;
        userscore.innerText= us;
        msg.innerText= `You Win! your ${cid} beats ${cc}`;
        msg.style.backgroundColor = "green";
     }else{
        cs++;
        compscor.innerText= cs;
        msg.innerText=`You lose. ${cc} beats your ${cid}`;
        msg.style.backgroundColor = "red";

     }
}

const playgame=(cid)=>{
    console.log("userchoice = ", cid);
    const cc=gencompchoice();
    console.log("comp choice =" , cc);

    if(cid=== cc){
        console.log("game was Draw");
        msg.innerText = "game was Draw Play Again!";
        msg.style.backgroundColor = "black"
    }else{
        let userwin=true;
        if(cid==="rock"){
            userwin = cc==="paper" ? false : true;
        }else if(cid === "paper"){
            userwin = cc==="scissors" ? false : true;
        }else{
            userwin = cc=== "rock" ? false : true;
        }

        showwinner(userwin,cid,cc) ;

    }

};

const choices=document.querySelectorAll(".ch1");
choices.forEach((ch1)=>{
    ch1.addEventListener("click",()=>{
        let cid=ch1.getAttribute("id");
        playgame(cid);
    })
})
