let boxes = document.querySelectorAll(".box");
let newbtn = document.querySelector("#btn1");
let resetBtn = document.querySelector("#btn2");
let inputField = document.querySelector("#userinput");
let message = document.querySelector("#msg");;

let Turn;                                            //        X / O

//2-D array for storing winning patterns
let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];    

const start = ()=>{
    newbtn.disabled = true;
    document.querySelector("span").style.visibility = "visible";
    inputField.style.visibility = "visible";
    resetBtn.style.visibility = "visible";

    inputField.addEventListener("input",()=>{
        (inputField.value==="X"|inputField.value==="O")? Turn = inputField.value : alert("Please Enter either X or O");
        inputField.disabled = true;
    });
    let countClicks = 0;
    boxes.forEach((box)=>{
        box.style.color = "black";
        box.addEventListener("click",()=>{
            countClicks += 1;
            box.innerText = Turn;
            if (Turn==="X") {
                Turn = "O";
            } else if(Turn===undefined){
                alert("Please select who will start!");
            }
            else {
                Turn = "X";
                box.style.color = "#b0413e";
            }
            box.disabled = true;

            CheckWinner();          //checking winner on each click
        });

    });

    const showWinner = (winner)=>{
        message.innerText = `Congratulations, Winner is ${winner}`;
    };
    let winner;
    let pos1;
    let pos2;
    let pos3;

    const CheckWinner = ()=>{
        for (const pattern of winPatterns) {
            pos1 = boxes[pattern[0]].innerText;
            pos2 = boxes[pattern[1]].innerText;
            pos3 = boxes[pattern[2]].innerText;

            if (pos1 != "" & pos2 != "" & pos3 != "") {
                if (pos1 === pos2 && pos2 === pos3) {
                    showWinner(pos1);
                    for (const box of boxes) {
                        box.disabled = true;
                    };
                    newbtn.disabled = false;
                }
                else if(countClicks===9){
                    message.innerText = "Its a Draw!";
                };
                winner = (pos1 === pos2 && pos2 === pos3)?pos1:"None";
            };  
        };
    };

    let resetGame = (prevWinner)=>{
        countClicks = 0;
        newbtn.disabled = false;
        inputField.disabled = false;
        inputField.value = "";
        for (const box of boxes) {
            box.disabled = false;
            box.innerText = "";
        };
        message.innerText = `Previous Winner: ${prevWinner}`;
        message.style.color = "#ffff64"
    };

    resetBtn.addEventListener("click",()=>{
        resetGame(winner);
    });
    newbtn.addEventListener("click",()=>{
        start();
        countClicks = 0;
        message.innerText = "";
        inputField.disabled = false;
        inputField.value = "";
        for (const box of boxes) {
            box.disabled = false;
            box.innerText = "";
        };
    }); 
};
newbtn.addEventListener("click",start);