function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlphaElement = document.getElementById("current-alphabet");
    currentAlphaElement.innerText = alphabet;
    // document.getElementById(alphabet).style.backgroundColor = "#FFA500";
    setBackgroundColorById(alphabet)
}

function play() {
    hideElementById("home-screen");
    showElementById("play-ground");
    continueGame();
}