let loginButton = document.getElementById("login-btn");
let addMessage = document.getElementById("print-message");
let e = document.getElementById("email").value;
let p = document.getElementById("password").value;

let disappear = () => addMessage.innerText =" ";

loginButton.addEventListener("click",() => {
    addMessage.innerText = "You are successfully logged in!!!";
    setTimeout(disappear,2000);
});

// if((e == null || e=="") && (p==null || p=="")){
//     addMessage.innerText = "Please enter details";
// }
// else{
//     addMessage.innerText = "You are successfully logged in!!!";
// }


