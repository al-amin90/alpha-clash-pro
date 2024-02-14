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

function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("bg-[#FFA500]");
}

function getTextElementValueById(elementId) {
    const elementValue = document.getElementById(elementId).innerText;
    return parseInt(elementValue);
}

function getTextElementById(elementId) {
    const element = document.getElementById(elementId);
    return element.innerText;
}

function setTextElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}