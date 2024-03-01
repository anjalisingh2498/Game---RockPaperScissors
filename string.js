//Rock Paper Scissor
let playGame= confirm("shall we play rock, paper or scissors?");

if(playGame) {
    //play
    let playerChoice = prompt("Please enter rock,paper or scissor");
    if(playerChoice){
            let playerone =playerChoice.trim().toLowerCase();
            if(playerone === "rock" || playerone ==="paper" || playerone ==="scissors"){
                let computerchoice =Math.floor(Math.random()* 3+1);
                let computer = computerchoice ===1?"rock": computerchoice===2?"paper" : "scissors";
            }
            else{
                alert("You didn't enter valid option");
            }
    }else{
        alert("I guess you changed your mind. Maybe next time.");
    }
}
else{
    alert("OK, Maybe next time");
}

