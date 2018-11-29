let button = document.getElementsByClassName("radiusButton");
let fakeArea = document.getElementById("fakeArea");
let inputGroup = document.getElementsByClassName('input-group')[0];
let inputFile = document.createElement("input");
inputFile.style.transform = "translateY(16px)";
inputFile.style.display = "inline-grid";
inputFile.style.height = "64px";
inputFile.style.opacity = "1";
inputFile.type = "file";
inputFile.accept =
    "audio/*;capture=microphone," +
    "image/*;capture=camera," +
    "video/*;capture=camcorder," +
    ".csv, image/png, image/jpeg";

function radiusMe() {
    let chatBody = document.getElementsByClassName("chat-body");
    let avatarImg = document.getElementsByTagName("img");
    fakeArea.classList.toggle("darkUi");
    let avatar = document.getElementsByClassName("chat-avatar");
    button[0].classList.toggle("radius");

    for (let i = 0; i < chatBody.length; i++) {
        avatarImg[i].classList.toggle("radius");
        avatar[i].classList.toggle("radius");
        chatBody[i].classList.toggle("darkUi");
    }
}

function addMe() {
    let filesButton = document.getElementsByClassName("filesButton")[0];
    filesButton.onfocus = true;

    let org = fakeArea.innerHTML;

    fakeArea.innerHTML = "";
    fakeArea.appendChild(inputFile);

    setTimeout(function(){
        inputFile.style.transition = "all 1.3s";
        inputFile.style.opacity = "0";
        
        setTimeout(function() {
            fakeArea.innerHTML = org;
        }, 1300);
    }, 5000);

    clearTimeout();
}