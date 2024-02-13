function hideElementById(elementId) {
    document.getElementById(elementId).classList.add("hidden");
}

function showElementById(elementId) {
    document.getElementById(elementId).classList.toggle("hidden");
}

function getARandomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split("");
    const alphabet = alphabets[Math.floor(Math.random() * alphabets.length)];
    return alphabet;
}

function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-[#FFA500]");
}