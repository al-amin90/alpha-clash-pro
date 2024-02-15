function hideElementByID(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}

function showElementByID(elementId) {
    document.getElementById(elementId).classList.remove("hidden");
}

function getRandomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabets = alphabetString.split("");
    const randomAlphabet = alphabets[Math.floor(Math.random()*alphabets.length)]
    return randomAlphabet;
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId)
    return element.innerText;
}

function getElementTextValueById(elementId) {
    const element = document.getElementById(elementId);
    const value = parseInt(element.innerText);
    return value;
}

function setElementTextByValue(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function showBgColorById(elementId, value) {
    const element = document.getElementById(elementId);
    element.classList.add(value);
}

function removeBgColorById(elementId, value) {
    const element = document.getElementById(elementId).classList.remove(value)
}