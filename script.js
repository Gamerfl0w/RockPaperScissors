
let compChoice = "";
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
      let choice = ["Rock", "Paper", "Scissors"];
      return compChoice = choice[Math.floor(Math.random() * 3)];
}

function playRound(){
      let msg = prompt("Rock, Paper, or Scissors?", "");
      getComputerChoice();
      let result = "";

      if(msg === "Rock" && getComputerChoice() === "Scissors"){
           console.log(compChoice);
           result = "You Win!";
           playerScore += 1;    
      }else if(msg === "Paper" && getComputerChoice() === "Rock"){
           console.log(compChoice);
           result = "You Win!";
           playerScore += 1;     
      }else if(msg === "Scissors" && getComputerChoice() === "Paper"){
            console.log(compChoice);
            result = "You Win!";
            playerScore += 1;     
      }else if(msg === getComputerChoice()){
            console.log(compChoice);
            result = "It's a Tie";
      }else{
            console.log(compChoice);
            result = "You Lose";
            computerScore += 1;   
      }  

      console.log("Score: Player: " + playerScore + ", Computer: " + computerScore)
      return result;
}

for (let i = 1; i <= 5; i++) {
      console.log(playRound()); 
}