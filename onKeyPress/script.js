let text=document.getElementById("enter-key");
let result = document.getElementById("display-key");

let disappear = ()=>{
    result.textContent=" ";
}
text.addEventListener("keypress",()=>{
    result.textContent = "You pressed key";
    setTimeout(disappear,1000);
})
