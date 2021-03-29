// create a color change function
const themeColor = document.getElementById("body");
const logoColor = document.getElementById("body-logo");
const textColor = document.getElementById("body-text");
const btnTheme = document.getElementById("theme-btn");

let theme = "white";
btnTheme.addEventListener("click", e => {
    // равны по значению и по типу
    if (theme === "white") {
        themeColor.classList.add("black");
        logoColor.style.color = "white";
        textColor.style.color = "white";
        theme = "black";
    } else if (theme === "black") {
        themeColor.classList.remove("black");
        logoColor.style.color = "black";
        textColor.style.color = "black";
        theme = "white";
    }
});

// function changeColor() {
//     // if "btnTheme" was click it should change color to black
//     if (btnTheme.click) {
//         // classList takes the selector "black" and adds it to body
//         themeColor.classList.toggle("black");
//         logoColor.style.color = "white";
//         textColor.style.color = "white";
//     }
// }

//modal windows

// first modal window
const modalWindow = document.getElementById("modal-window");
const modalBtnOne = document.getElementById("modal-btn1");
const modalContent = document.getElementsByClassName("modal-content");

modalBtnOne.addEventListener('click', function(e) {
    if (modalBtnOne) {
        modalWindow.style.display = "block";
    }
});

// modalContent.addEventListener('click', function(e) {
//     if (modalContent) {
//         modalWindow.display.style = "block";
//     }
// });

modalWindow.addEventListener('click', function(e) {
    if (modalWindow.click) {
        modalWindow.style.display = "none";
    }
});

//second modal window
const modalWindowTwo = document.getElementById("modal-window-two");
const modalBtnTwo = document.getElementById("modal-btn2");

modalBtnTwo.addEventListener('click', function(e) {
    if (modalBtnTwo) {
        modalWindowTwo.style.display = "block";
    }
});

modalWindowTwo.addEventListener('click', function(e) {
    if (modalWindowTwo.click) {
        modalWindowTwo.style.display = "none";
    }
});