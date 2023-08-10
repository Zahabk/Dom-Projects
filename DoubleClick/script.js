let doubleClick = document.getElementById("click");
doubleClick.addEventListener("dblclick",insert);

function insert(){
    doubleClick.style.backgroundColor="#eecbf9";
    doubleClick.style.padding="20px";
    doubleClick.style.color="black";
    doubleClick.innerText="Zahabiya Kapadia";
}