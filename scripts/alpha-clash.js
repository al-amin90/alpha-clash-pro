document.getElementById("home-screen").addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        play();
    }
})

function play() {
    hideElementByID("home-screen");
    hideElementByID("final-score")
    showElementByID("play-ground")

    setElementTextByValue("current-score", 0)
    setElementTextByValue("life-score", 5)
    continueGame()
}

function continueGame() {
    const randomAlphabet = getRandomAlphabet();
    setElementTextByValue("current-alphabet", randomAlphabet);
    showBgColorById(randomAlphabet, "bg-[#FFA500]")
}

document.addEventListener("keyup", function (e) {
    const KeyAlphabet = e.key;
    
    const currentAlphabetElement = document.getElementById("current-alphabet");
    const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();
    
    if (KeyAlphabet === "Escape") {
        removeBgColorById(currentAlphabet, "bg-[#FFA500]");
        over()
    }
    
    const pressAlphabet = getElementTextById(KeyAlphabet);
    if (pressAlphabet === currentAlphabet) {
        const currentScore = getElementTextValueById("current-score");
        const newScore = currentScore + 1;
        setElementTextByValue("current-score", newScore);

        removeBgColorById(currentAlphabet, "bg-[#FFA500]");
        continueGame()
    }
    else {
        const currentLife = getElementTextValueById("life-score");
        const newScore = currentLife - 1;
        setElementTextByValue("life-score", newScore);

        showBgColorById(pressAlphabet, "bg-rose-400");
        setTimeout(function () {
            removeBgColorById(pressAlphabet, "bg-rose-400")
        }, 500)
        if (newScore === 0) {
            removeBgColorById(currentAlphabet, "bg-[#FFA500]");
            over();
        }
    }
})



function over() {
    hideElementByID("play-ground");
    showElementByID("final-score");
    
    const currentScore = getElementTextById("current-score");
    document.getElementById("game-score").innerText = currentScore;
    
}