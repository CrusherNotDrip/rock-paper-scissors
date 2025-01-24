const button = document.getElementById("confirm");
button.addEventListener("click", getOutcome);

function getOutcome() {
    const playerSelection = document.getElementById("selection").value;
    const opponentSelection = generateSelection();

    const playerPickText = document.getElementById("playerPickText");
    const opponentPickText = document.getElementById("opponentPickText");
    const outcomeText = document.getElementById("outcomeText");

    playerPickText.innerHTML = "You picked " + playerSelection + ".";
    opponentPickText.innerHTML = "Opponent picked " + opponentSelection + ".";
    outcomeText.innerHTML = "You " + getOutcomeText(playerSelection, opponentSelection) + "!";
}

function generateSelection() {
    var selections = ["rock", "paper", "scissors"];
    return selections[Math.floor(Math.random() * selections.length)];
}

function hasWon(playerSelection, opponentSelection) {
    if (
        (playerSelection == "rock" && opponentSelection == "scissors") ||
        (playerSelection == "paper" && opponentSelection == "rock") ||
        (playerSelection == "scissors" && opponentSelection == "paper")
    )
        return true;

    return false;
}

function hasTied(playerSelection, opponentSelection) {
    return playerSelection == opponentSelection;
}

function getOutcomeText(playerSelection, opponentSelection) {
    const win = hasWon(playerSelection, opponentSelection);
    const tie = hasTied(playerSelection, opponentSelection);

    if (win) {
        return "win";
    } else if (tie) {
        return "tied";
    } else {
        return "lose";
    }
}
