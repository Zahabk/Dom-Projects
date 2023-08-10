let decButton = document.getElementsByClassName("dec");
let incButton = document.getElementsByClassName("inc");
let resetButton = document.getElementById("reset")
let resultBox = document.getElementById("small");

decButton.addEventListener("click",decrementVal);
function decrementVal(){
    let result = parseInt(document.getElementById("small").innerText) - 1;
    document.getElementById("small").innerText = result;
}

incButton.addEventListener("click",incrementVal);
function incrementVal(){
    let result = parseInt(document.getElementById("small").innerText) + 1;
    document.getElementById("small").innerText = result;
}

resetButton.addEventListener("click",resetVal);
function resetVal(){
    resultBox.innerText = 0;
}