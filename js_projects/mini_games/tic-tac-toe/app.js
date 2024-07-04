let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".reset")
let newGameBtn = document.querySelector(".newGame")
let winMsg = document.querySelector("#win-msg")
let header = document.querySelector(".header");


let turn0 = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]



boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turn0) {
            box.innerText = "X"
            turn0 = false;
        } else {
            box.innerText = "O"
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for(pattern of winPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

let showWinner = (winner) => {
    winMsg.innerText = `Congratulations, Winner is ${winner}`
    winMsg.classList.remove("hide")
    newGameBtn.classList.remove("hide")
    resetBtn.classList.add("hide")
    header.classList.add("hide")
    disableBoxes();
};


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const resetGame = () => {
    turn0 = true;
    enableBoxes();
    winMsg.classList.add("hide")
    newGameBtn.classList.add("hide")
    resetBtn.classList.remove("hide")
    header.classList.remove("hide")
}


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);