function handleKeyboardButtonPress(event) {
    const playerPress = event.key;
    
    if (playerPress === "Escape") {
        gameOver();
    }

    const currentAlphaElement = document.getElementById("current-alphabet");
    const currentAlpha = currentAlphaElement.innerText.toLowerCase();

    if (playerPress === currentAlpha) {
        const currentScore = getTextElementValueById("current-score");
        const newScore = currentScore + 1;
        setTextElementValueById("current-score", newScore)

        removeBackgroundColorById(currentAlpha);
        continueGame();
    }
    else {
        const lifeScore = getTextElementValueById("life-score");
        const newScore = lifeScore - 1;

        setTextElementValueById("life-score", newScore)

        if (newScore === 0) {
            gameOver();
        }
    }
}

document.addEventListener("keyup", handleKeyboardButtonPress);

function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlphaElement = document.getElementById("current-alphabet");
    currentAlphaElement.innerText = alphabet;

    // document.getElementById(alphabet).style.backgroundColor = "#FFA500";
    setBackgroundColorById(alphabet)
}

function play() {
    hideElementById("home-screen");
    hideElementById("final-score");
    showElementById("play-ground");

    setTextElementValueById("life-score", 5)
    setTextElementValueById("current-score", 0)
    continueGame();
}

function gameOver() {
    hideElementById("play-ground");
    showElementById("final-score");

    const currentAlpha = getTextElementById("current-alphabet");
    removeBackgroundColorById(currentAlpha)

    const getScore = getTextElementValueById("current-score");
    setTextElementValueById("game-score", getScore)
}