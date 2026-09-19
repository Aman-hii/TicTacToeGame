let boxes = document.querySelectorAll("#box");
let resetbtn = document.querySelector("#resetButton");
let messegeContainer = document.querySelector(".msg-container");
let newbtn = document.querySelector("#new-btn");
let messege = document.querySelector("#msg");

let turn0 = true;
let count =0;
const winPattern = [[0,1,2],
                  [0,3,6],
                  [0,4,8],
                  [1,4,7],
                  [2,5,8],
                  [2,4,6],
                  [3,4,5],
                  [6,7,8]];

const resetBtn = () =>{
    turn0 = true;
    count = 0;
    enablebox();
    messegeContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else {
            box.innerText ="X";
            turn0 = true;
        }
        box.disabled = true;
        count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
    }); 
});
const gameDraw = () => {
  messege.innerText = `Game was a Draw.`;
  messegeContainer.classList.remove("hide");
  disablebox();
};
const disablebox = ()=>{
    for(let box of boxes)
        box.disabled = true;
};
const enablebox = ()=>{
    for(let box of boxes){
        box.disabled = false;
    box.innerText="";}
};
const showWinner = (winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    messegeContainer.classList.remove("hide");
    disablebox();

};

const checkWinner=()=>{
for(let pattern of winPattern){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if(pos1val !=""&&pos2val != "" && pos3val !=""){
        if(pos1val===pos2val && pos2val === pos3val){
            
            showWinner(pos1val);
            return true;
        }
    }
}
};
newbtn.addEventListener("click",resetBtn);
resetbtn.addEventListener("click",resetBtn);
