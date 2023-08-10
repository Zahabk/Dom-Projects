let input = document.getElementById("key-val");
let b1 = document.getElementById("box");

let disappear = ()=>{
    b1.style.width="100px";
    b1.style.height="100px";
}

input.addEventListener("keydown",() => {
    b1.style.width="200px";
    b1.style.height="200px";
    setTimeout(disappear,1000);
})