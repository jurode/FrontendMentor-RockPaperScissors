// == //////////////////////
// == VARIABLES
// == //////////////////////

// all possible 5 options as Array
const optionsArray = document.querySelectorAll(".chooseOption");
const btnsArea = document.getElementById("startBtns");
const gameArea = document.getElementById("game");
const userPickedLoc = document.getElementById("youPicked");
const housePickedLoc = document.getElementById("housePicked");
let resultOutput = document.getElementById("result");
const playAgainBtn = document.getElementById("playagain");
let userChoice = "";
let userChoiceIndex = "";
let houseChoice = "";
let houseChoiceIndex = "";

// house, user, winner
let resultArray = [
    [0, 1, 1],
    [0, 2, 0],
    [0, 3, 0],
    [0, 4, 1],
    [1, 0, 0],
    [1, 2, 1],
    [1, 3, 1],
    [1, 4, 0],
    [2, 1, 0],
    [2, 3, 1],
    [2, 4, 1],
    [2, 0, 0],
    [3, 0, 1],
    [3, 2, 0],
    [3, 1, 0],
    [3, 4, 1],
    [4, 0, 0],
    [4, 2, 1],
    [4, 1, 1],
    [4, 3, 0]
]






// == //////////////////////
// == User choose item
// == //////////////////////

const chooseUser = () => {
    // console.log("start chooseUser");
    // for each button
    for (let i = 0; i < optionsArray.length; i++) {
        // listen for a click event 
        optionsArray[i].addEventListener('click', () => {

            // nimm img + speicher es in #game #youPicked
            userChoice = optionsArray[i];
            userChoice.classList.add("animate__animated", "animate__fadeIn");
            // copy code
            let temp = userChoice.cloneNode(true);
            // console.log(temp);
            // append it to location
            userPickedLoc.appendChild(temp);

            // store index
            userChoiceIndex = i;

            // setz #startBtns display.none
            btnsArea.style.display = "none";
            gameArea.style.display = "grid";

            // console.log("end chooseUser");
            // choose house with a little delay
            setTimeout(chooseHouse, 1000);

        });
}

}

// == //////////////////////
// == House choose item
// == //////////////////////
let chooseHouse = () => {
    // console.log("start chooseHouse");

    // console.log(userChoice);

    let houseChoiceVal = Math.floor(Math.random() * 5);
    houseChoice = optionsArray[houseChoiceVal];
    houseChoice.classList.add("animate__animated", "animate__fadeIn");
    houseChoiceIndex = houseChoiceVal;

    let temp = "";
    temp = houseChoice.cloneNode(true);
    // console.log(housePickedLoc.hasChildNodes())
    housePickedLoc.appendChild(temp);

    // console.log(houseChoice);

    // console.log("end chooseHouse");

    // compare results
    setTimeout(compareResult, 2000);

}


// # Compare
// scoring
let compareResult = () => {
    // console.log("start compareResult");

    // if result = equal
    if (houseChoiceIndex == userChoiceIndex) {
        resultOutput.innerHTML = "equal"
    } else {
        // if not equal:

        // for every element in resultArray:
        for (let i = 0; i < resultArray.length; i++) {
            // if equal to first digit in each "row"
            if (houseChoiceIndex == resultArray[i][0]) {
                // if equal to second digit in each "row"
                if (userChoiceIndex == resultArray[i][1]) {
                    // if third digit = 0, then house wins
                    if (resultArray[i][2] == 0) {
                        resultOutput.innerHTML = "House wins";
                    } else {
                        resultOutput.innerHTML = "you win";
                    }
                }
            }
        }
    }

    // display play again btn
    playAgainBtn.style.display = "block";
    // console.log("end compareResult");

    playAgain();

    // TODO: score
}

// # Play again
let playAgain = () => {

    playAgainBtn.addEventListener("click", () => {
        btnsArea.style.display = "grid";
        gameArea.style.display = "none";

        location.reload();
        
        // TODO: FIX it
        // userChoice = "";
        // userChoiceIndex = "";
        // houseChoice = "";
        // houseChoiceIndex = "";

        // while (housePickedLoc.firstChild) {
        //     housePickedLoc.removeChild(housePickedLoc.lastChild);
        // }
        // while (userPickedLoc.firstChild) {
        //     userPickedLoc.removeChild(userPickedLoc.lastChild);
        // }
        // housePickedLoc.innerHTML = "";
        // userPickedLoc.innerHTML = "";

        // chooseUser();

    })
}


// TODO: modal Rules


chooseUser();