let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userpoint=document.querySelector("#user-score");
const computerpoint=document.querySelector("#computer-score");

const playgame=(userchoice)=>{
    const compchoice=computerchoice();
    if(userchoice===compchoice){
        draw();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            if(compchoice==="paper") userwin=false;
        }
        else if(userchoice==="paper"){
            if(compchoice==="scissors") userwin=false;
        }
        else{
            if(compchoice==="rock") userwin=false;
        }
        showwinner(userwin,userchoice,compchoice);
    }

}

const computerchoice=()=>{
    const options=["rock","paper","scissors"];
    let randomind=Math.floor(Math.random()*3);
    return options[randomind];
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});

const draw=()=>{
    msg.innerText="Draw";
    msg.style.backgroundColor="yellow";
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin) {
        msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
        userscore++;
        userpoint.innerText=userscore;
    }
    else {
        msg.innerText=`You lost:( ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
        computerscore++;
        computerpoint.innerText=computerscore;
    }
}