let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let message = document.querySelector("#msg");

let user_Score = 0;
let comp_Score = 0;

const result = (Usermove)=>{
    
    const computersMove = ()=>{
        let moves = ["Rock","Paper","Scissor"];
        let rndIdx = Math.floor(Math.random()*3);
        console.log(moves[rndIdx]);
        return moves[rndIdx];
    };
    let Compmove = computersMove();

    if (Usermove===Compmove){
        message.innerText = "It was Draw.";
        message.style.backgroundColor = "#081b31";
    }
    else if(Usermove==="Rock" && Compmove==="Paper"){
        message.innerText = `You Lost! ${Compmove} beats ${Usermove}`;
        message.style.backgroundColor = "Red";
        comp_Score += 1;
        compScore.innerText = comp_Score;
    }
    else if(Usermove==="Rock" && Compmove==="Scissor"){
        message.innerText = `You Won! ${Usermove} beats ${Compmove}`;
        message.style.backgroundColor = "Green";
        user_Score += 1;
        userScore.innerText = user_Score;
    }
    else if(Usermove==="Paper" && Compmove==="Rock"){
        message.innerText = `You Won! ${Usermove} beats ${Compmove}`;
        message.style.backgroundColor = "Green";
        user_Score += 1;
        userScore.innerText = user_Score;
    }
    else if(Usermove==="Paper" && Compmove==="Scissor"){
        message.innerText = `You Lost! ${Compmove} beats ${Usermove}`;
        message.style.backgroundColor = "Red";
        comp_Score += 1;
        compScore.innerText = comp_Score;
    }
    else if(Usermove==="Scissor" && Compmove==="Paper"){
        message.innerText = `You Won! ${Usermove} beats ${Compmove}`;
        message.style.backgroundColor = "Green";
        user_Score += 1;
        userScore.innerText = user_Score;
    }
    else if(Usermove==="Scissor" && Compmove==="Rock"){
        message.innerText = `You Lost! ${Compmove} beats ${Usermove}`;
        message.style.backgroundColor = "Red";
        comp_Score += 1;
        compScore.innerText = comp_Score;
    };
};

rock.addEventListener("click",()=>{
    let move = "Rock";
    result(move);
});
paper.addEventListener("click",()=>{
    let move = "Paper";
    result(move);
});
scissor.addEventListener("click",()=>{
    let move = "Scissor";
    result(move);
});