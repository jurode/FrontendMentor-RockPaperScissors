
// == User choose item
// *let idArray = ["lizard", "paper", "rock", "scissors", "spock"];

let chooseButtons = document.querySelectorAll(".chooseOption");
// console.log(chooseButtons);

// *loop through the buttons using for..of 
// for (let button of chooseButtons) {
for (let i = 0; i < chooseButtons.length; i++) {
    // console.log(button);

    // *listen for a click event 
    chooseButtons[i].addEventListener('click', (e) => {
        // *Store the event target in a const
        const et = e.target;

        // *store chosen id in variable
        const userChoice = chooseButtons[i].id;
    
        // et.style.display = "none";
        // ? style.display not working

        // TODO: irgendwann einfachere Schleife/Condition?
        if (chooseButtons[i].id === "scissors") {
            // document.getElementById("scissors").classList.add("chosenInactive");
            document.getElementById("paper").classList.add("chosenInactive");
            document.getElementById("rock").classList.add("chosenInactive");
            document.getElementById("lizard").classList.add("chosenInactive");
            document.getElementById("spock").classList.add("chosenInactive");         
        } else if (chooseButtons[i].id === "paper") {
            document.getElementById("scissors").classList.add("chosenInactive");
            // document.getElementById("paper").classList.add("chosenInactive");
            document.getElementById("rock").classList.add("chosenInactive");
            document.getElementById("lizard").classList.add("chosenInactive");
            document.getElementById("spock").classList.add("chosenInactive");         
        } else if (chooseButtons[i].id === "rock") {
            document.getElementById("scissors").classList.add("chosenInactive");
            document.getElementById("paper").classList.add("chosenInactive");
            // document.getElementById("rock").classList.add("chosenInactive");
            document.getElementById("lizard").classList.add("chosenInactive");
            document.getElementById("spock").classList.add("chosenInactive");         
        } else if (chooseButtons[i].id === "lizard") {
            document.getElementById("scissors").classList.add("chosenInactive");
            document.getElementById("paper").classList.add("chosenInactive");
            document.getElementById("rock").classList.add("chosenInactive");
            // document.getElementById("lizard").classList.add("chosenInactive");
            document.getElementById("spock").classList.add("chosenInactive");         
        } else if (chooseButtons[i].id === "spock") {
            document.getElementById("scissors").classList.add("chosenInactive");
            document.getElementById("paper").classList.add("chosenInactive");
            document.getElementById("rock").classList.add("chosenInactive");
            document.getElementById("lizard").classList.add("chosenInactive");
            // document.getElementById("spock").classList.add("chosenInactive");         
        } // if cases

        let houseChoiceVal = Math.floor(Math.random()*5);
        // console.log(houseChoice);
        let houseChoice = "";

        switch(houseChoiceVal) {
            case 0:
                houseChoice = "scissors";
                break;
            case 1:
                houseChoice = "paper";
                break;
            case 2:
                houseChoice = "rock";
                break;
            case 3:
                houseChoice = "lizard";
                break;
            case 4:
                houseChoice = "spock";
                break;
        }
        // console.log(houseChoice);

        // * show housePicked
        document.getElementById("housePicked").innerHTML = "<button id='housePick'>" + houseChoice + "</button>";
        // TODO: Symbol sichtbar machen

        // * comparison who won
        // * first create some functions

        function youWon(){
            document.getElementById("result").innerHTML = "<h2>You Won</h2>";
            document.getElementById("playagain").style.display = "block";
        }

        function youLose(){
            document.getElementById("result").innerHTML = "<h2>You Lose</h2>";
            document.getElementById("playagain").style.display = "block";

        }

        function youAreEqual(){
            document.getElementById("result").innerHTML = "<h2>You are equal</h2>";
            document.getElementById("playagain").style.display = "block";

        }

        function refreshPage(){
            window.location.reload();
        } 


        // * if comparison

        if (houseChoice == userChoice) {
            youAreEqual();
        } else if (houseChoice == "scissors" && userChoice == "rock") {
            youWon();
        } else if (houseChoice == "scissors" && userChoice == "paper") {
            youLose();
        } else if (houseChoice == "scissors" && userChoice == "lizard") {
            youLose();
        } else if (houseChoice == "scissors" && userChoice == "spock") {
            youWon();
        }  else if (houseChoice == "rock" && userChoice == "scissors") {
            youLose();
        } else if (houseChoice == "rock" && userChoice == "paper") {
            youWon();
        } else if (houseChoice == "rock" && userChoice == "lizard") {
            youLose();
        } else if (houseChoice == "rock" && userChoice == "spock") {
            youWon();
        } else if (houseChoice == "paper" && userChoice == "scissors") {
            youWon();
        } else if (houseChoice == "paper" && userChoice == "rock") {
            youLose();
        } else if (houseChoice == "paper" && userChoice == "lizard") {
            youWon();
        } else if (houseChoice == "paper" && userChoice == "spock") {
            youLose();
        } else if (houseChoice == "lizard" && userChoice == "scissors") {
            youWon();
        } else if (houseChoice == "lizard" && userChoice == "rock") {
            youWon();
        } else if (houseChoice == "lizard" && userChoice == "paper") {
            youLose();
        } else if (houseChoice == "lizard" && userChoice == "spock") {
            youLose();
        } else if (houseChoice == "spock" && userChoice == "scissors") {
            youLose();
        } else if (houseChoice == "spock" && userChoice == "rock") {
            youLose();
        } else if (houseChoice == "spock" && userChoice == "paper") {
            youWon();
        } else if (houseChoice == "spock" && userChoice == "lizard") {
            youWon();
        }
        // TODO try with "onclick=refreshPage()" 
        // TODO location node als variable abspeichern & dann eventListener mit Funktion einbauen
        // TODO true/false brauch ich nicht hier
        // document.getElementById("playagain").addEventListener("click", refreshPage(), false);
        // ? aktualisiert dann immer sofort nach dem ersten Button Klick?
        
    }); //addEventListener
} // for loop
   
