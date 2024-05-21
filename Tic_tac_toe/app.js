let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newgamebtn=document.querySelector("#new-game");
let msgcontain=document.querySelector(".msg-conatin");
let msg=document.querySelector("#msg");
let turnO=true;
let cnt=0;
const winpattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            box.style.color="#d05e5e";
        }
        else{
            box.innerText="X";
            turnO=true;
            box.style.color="#62929E"
        }
        box.disabled=true;
        cnt++;
        checkWin();

        let iswinner=checkWin();

        if(cnt=== 9 && !iswinner){
            draw();
        }
    })
});
const newfunc=()=>{
    turnO=true;
    enablebtn();
    cnt=0;
    msgcontain.classList.add("hide");
};
const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const btndisable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const draw=()=>{
    msgcontain.classList.remove("hide");
    msg.innerText="Game Draw";
}
const checkWin=()=>{
    for(let pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                msg.innerText=`Congratulations ${pos1} wins`;
                msgcontain.classList.remove("hide");
                btndisable();
                return true;
            }
        }
    }
};

newgamebtn.addEventListener("click",newfunc);
resetbtn.addEventListener("click",newfunc);