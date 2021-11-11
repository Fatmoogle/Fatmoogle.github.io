
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".modal-close");
var modal1 = document.querySelector(".modal1");
var modal2 = document.querySelector(".modal2");
var modal3 = document.querySelector(".modal3");
var modal4 = document.querySelector(".modal4");
var modalHeader = document.querySelector("h2");
var modalParagraph = document.querySelector("p");
var appBtn = document.querySelector(".applicationBtn");
var gitBtn = document.querySelector(".githubBtn");


console.log(gitBtn);

/* Modal functions for each portfolio object */

modal1.addEventListener('click', function(){
    console.log("modal 1");
    modalBg.classList.add("bg-active");
    modalHeader.textContent = "Coding Quiz!";
    modalParagraph.textContent = "Fun and silly game created using JavaScript to test your knowledge on basic coding ideas. Answer correctly before time runs out!";
    appBtn.setAttribute("onclick", "window.location.href='https://fatmoogle.github.io/Coding-Quiz/';");
    gitBtn.setAttribute("onclick", "window.location.href='https://github.com/Fatmoogle/Coding-Quiz';");
})

modal2.addEventListener('click', function(){
    console.log("modal 2");
    modalBg.classList.add("bg-active");
    modalHeader.textContent = "Dinner Dice";
    modalParagraph.textContent = "A mobile friendly application created to generate random recipes for drinks and food using two API’s. Simply choose a filter for each and then generate your recipe!";
    appBtn.setAttribute("onclick", "window.location.href='https://victoriagfield.github.io/Dinner_Dice/';");
    gitBtn.setAttribute("onclick", "window.location.href='https://github.com/victoriagfield/Dinner_Dice';");
})

modal3.addEventListener('click', function(){
    console.log("modal 3");
    modalBg.classList.add("bg-active");
    modalHeader.textContent = "Password Generator";
    modalParagraph.textContent = "Application to generate random password between 8 and 128 characters in length.";
    appBtn.setAttribute("onclick", "window.location.href='https://fatmoogle.github.io/Password-Generator/';");
    gitBtn.setAttribute("onclick", "window.location.href='https://github.com/Fatmoogle/Password-Generator';");
})

modal4.addEventListener('click', function(){
    console.log("modal 4");
    modalBg.classList.add("bg-active");
    modalHeader.textContent = "Weather Dashboard";
    modalParagraph.textContent = "Weather application that allows user to search for the current and 5 day forecast of a city.";
    appBtn.setAttribute("onclick", "window.location.href='https://fatmoogle.github.io/Weather-Dashboard/';");
    gitBtn.setAttribute("onclick", "window.location.href='https://github.com/Fatmoogle/Weather-Dashboard';");
})

/*  Function to close modal window  */

modalClose.addEventListener('click', function(){
    modalBg.classList.remove("bg-active");
})