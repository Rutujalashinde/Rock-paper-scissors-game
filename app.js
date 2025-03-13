// created two variable for storing values 
let userScore = 0;
let compScore = 0;

// accessed choices 
const choices = document.querySelectorAll(".choice");

//for displaying msg access msg para to click
const msg = document.querySelector("#msg");

// accessing userscore and compscore
let userScoreCount = document.querySelector("#user-score");

let compScoreCount = document.querySelector("#comp-score");

// computer random choice
const genCompChoice = () => {
    const options = ["rock", "paper","scissors"];
    const ranIndx = Math.floor(Math.random() * 3); //math.rondom generates a random number like 0.23893811170102808 so to remove whole number from this like only one num 0/1/2 we use math.floor so this will generate a random number we will treat it as a index of array options
    // this will generate index 
    console.log("Random Index:", ranIndx); // Add this line to check
    return options[ranIndx];

};

// drawgame func
let drawGame = () =>{
    console.log("The Game was draw");
    msg.innerText = "Game draw";
    msg.style.backgroundColor = "blue";
}

let showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        // if user win then increse count and in count store user winning number
        userScore++;
        userScoreCount.innerText = userScore;

        console.log("Hurray you win!!!");
        msg.innerText = `Hurray You win!!! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        // if comp win then increse count and in count store comp winning number
        compScore++;
        compScoreCount.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lose... your ${userChoice} doesn't beat ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}

//for all playing game main function ->>>>>>>>>>>>>>>>
const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);

    //generate comp choice
    // so we can call this in playGame and store it in comp choice
    const compChoice = genCompChoice();
    console.log("computer choice =", compChoice);

    // if we want to draw create a func for storing console msg for draw

    if(userChoice === compChoice){
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissors paper
            userWin = compChoice ==="paper" ? false : true;
        } else if (userChoice === "paper"){
            //rock scissors
        userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice === "scissors" ? false : true;
        }
        showWinner(userWin, userChoice,compChoice);//msg containing func
    }

};



// adding click event and working function for user choice
choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // getting id of element using getAttribute method 
        // console.log("choice was clicked", userChoice);// user choice accessed
        playGame(userChoice);
    });
});

