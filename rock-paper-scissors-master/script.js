// == //////////////////////
// == VARIABLES
// == //////////////////////

// all possible 5 options as Array
const chooseButtonArray = document.querySelectorAll(".chooseOption");
const btnsArea = document.getElementById("startBtns");
const gameArea = document.getElementById("game");
const userPickedLoc = document.getElementById("youPicked");
const housePickedLoc = document.getElementById("housePicked");
let userChoice;


// == //////////////////////
// == User choose item
// == //////////////////////

const chooseUser = () => {

    // for each button
    for (let i = 0; i < chooseButtonArray.length; i++) {
        // listen for a click event 
        chooseButtonArray[i].addEventListener('click', (e) => {
            // nimm img + speicher es in #game #youPicked
            userChoice = chooseButtonArray[i];
            // console.log(userChoice);

            let temp = userChoice.cloneNode(true);
            // console.log(temp);

            userPickedLoc.appendChild(temp);
            // console.log(userPickedLoc);

            // setz #startBtns display.none
            btnsArea.style.display = "none";

            // TODO: choose house
            chooseHouse();
        });
    }
}

// == //////////////////////
// == House choose item
// == //////////////////////
let chooseHouse = () => {
    let houseChoiceVal = Math.floor(Math.random() * 5);
    let houseChoice = "";

    switch (houseChoiceVal) {
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
    console.log(houseChoice);
}


// TODO: Compare
// scoring

// TODO: Play again


// TODO: modal Rules


chooseUser();