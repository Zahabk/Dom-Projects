let imgBox = document.getElementById("box");
let image =document.getElementById("image");

imgBox.addEventListener("mouseover",() => {
    image.style.filter = "blur(5px)"
    setTimeout(() => {
        image.style.filter = "blur(0px)"
        image.style.border = "2px solid purple";
    },1000)
})