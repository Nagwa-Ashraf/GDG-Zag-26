let box = document.getElementById("box");
let changeTextBtn = document.getElementById("changeText");
let changeColorBtn = document.getElementById("changeColor");

changeTextBtn.onclick = function() {
    box.textContent = "Text Changed!";
};

changeColorBtn.onclick = function() {
    box.style.backgroundColor = "lightblue";
};

let inputName = document.getElementById("inputName");
let showNameBtn = document.getElementById("showName");
let result = document.getElementById("result");

showNameBtn.onclick = function() {
    let name = inputName.value.trim();
    if(name === ""){
        result.textContent = "Please enter your name!";
        result.style.color = "red";
    } else {
        result.textContent = "Hello, " + name + "!";
        result.style.color = "green";
    }
};

let openSiteBtn = document.getElementById("openSite");
let showAlertBtn = document.getElementById("showAlert");

openSiteBtn.onclick = function() {
    window.open("https://elzero.org", "_blank");
};

showAlertBtn.onclick = function() {
    alert("This is a BOM Alert!");
};