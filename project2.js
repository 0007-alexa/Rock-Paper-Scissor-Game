let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgBox = document.querySelector(".msg-container");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    // rock,paper,scissors
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];

};

const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin) {
        userScore++;
        userscorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = " rgb(80, 213, 80)";
        }else{
            compScore++;
            compscorePara.innerText = compScore;
            msg.innerText = `You Loose :( ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = " rgb(223, 25, 25)";
    }

};

const drawGame = () =>{
    msg.innerText = "Game was draw :') Play Again!";
    msg.style.backgroundColor = "bisque";
};

const playGame = (userChoice) =>{
    // generate comp choice
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        //draw
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "paper") {
            //scissors,rock
           userWin = compChoice === "scissors"? false : true;
        }else if(userChoice === "rock") {
            //paper,scissors
            userWin = compChoice === "paper"? false : true;
        }else{
            //paper,rock
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);


    });

});
