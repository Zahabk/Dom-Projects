let imgBox = document.getElementById("box");
let image =document.getElementById("image");
let body = document.getElementById("body");

imgBox.addEventListener("mouseover",() => {
    image.style.border = "4px dotted purple";
    body.style.backgroundImage = "linear-gradient(to right,#d7f1ae,#2b4502)";
})
imgBox.addEventListener("mouseout",() =>{
    image.style.filter = "blur(0px)"
    image.style.border = "3px solid purple";
    body.style.backgroundImage = "none";
})