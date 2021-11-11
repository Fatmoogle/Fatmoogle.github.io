$(document).ready(function() {
    const modalBg = $(".modal-bg");
    const card = $(".card");
    const appBtn = document.querySelector("#app");
    const gitBtn = document.querySelector("#github");
    const oldImageUrl = "./Assets/Images/Profile_pic.jpg"
    let imageUrl = "";
    const contactPage = document.querySelector(".contact2");

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

    card.on("click", function () {
        const className = $(this).attr('class');
        switch(className) {
             /** PetsLuv Modal **/
            case "card luv":
                // console.log("You clicked PetsLuv");
                modalBg.addClass("bg-active");
                $(".modal").find("h2").text("PetsLuv");
                $(".modal").find("p").text("A gallery app for pets using React and Redux. Allows users to click and download any or all images! (Application will be live shortly)");
                $(".modal").find(".technologies").text("ReactJs, Redux, JavaScript, HTML5, CSS3, Material UI, Styled Components, Node JS, Axios");
                // appBtn.setAttribute("onclick", "window.location.href='https://dbugme.herokuapp.com';");
                gitBtn.setAttribute("onclick", "window.location.href='https://github.com/Fatmoogle/eulerity_app';");
                break;
            /** DBUGME Modal **/
            case "card bug":
                // console.log("You clicked DEBUGME");
                modalBg.addClass("bg-active");
                $(".modal").find("h2").text("DEBUGME");
                $(".modal").find("p").text("Social application where you connect with others as a student or as a mentor and share your knowledge!");
                $(".modal").find(".technologies").text("ReactJs, JavaScript, HTML5, CSS3, React Spring, Bootstrap, MongoDB, Mongoose, Express, Node JS, Axios, Cloudinary");
                appBtn.setAttribute("onclick", "window.location.href='https://dbugme.herokuapp.com';");
                gitBtn.setAttribute("onclick", "window.location.href='https://github.com/jesseodonoghue/project-3';");
                break;
            /** Coding Quiz! Modal **/
            case "card quiz":
                // console.log("You clicked Coding Quiz!");
                modalBg.addClass("bg-active");
                $(".modal").find("h2").text("Coding Quiz!");
                $(".modal").find("p").text("Fun and silly game created using JavaScript to test your knowledge on basic coding ideas.");
                $(".modal").find(".technologies").text("JavaScript, HTML5, CSS3");
                appBtn.setAttribute("onclick", "window.location.href='https://fatmoogle.github.io/Coding-Quiz/';");
                gitBtn.setAttribute("onclick", "window.location.href='https://github.com/Fatmoogle/Coding-Quiz';");
                break;
            /** Dinner Dice Modal **/
            case "card dice":
                // console.log("You clicked Dinner Dice");
                modalBg.addClass("bg-active");
                $(".modal").find("h2").text("Dinner Dice");
                $(".modal").find("p").text("A mobile friendly application created to generate random recipes for drinks and food using two API’s.");
                $(".modal").find(".technologies").text("JavaScript, HTML5, CSS3, Bootstrap, jQuery, 2 Public APIs");
                appBtn.setAttribute("onclick", "window.location.href='https://victoriagfield.github.io/Dinner_Dice/';");
                gitBtn.setAttribute("onclick", "window.location.href='https://github.com/victoriagfield/Dinner_Dice';");
                break;
            /** Weather Dashboard Modal **/
            case "card dash":
                // console.log("You clicked Weather Dashboard");
                modalBg.addClass("bg-active");
                $(".modal").find("h2").text("Weather Dashboard");
                $(".modal").find("p").text("Weather application that allows user to search for the current and 5 day forecast of a city.");
                $(".modal").find(".technologies").text("JavaScript, HTML5, CSS3, Bootstrap, jQuery, OpenWeatherMap API");
                appBtn.setAttribute("onclick", "window.location.href='https://fatmoogle.github.io/Weather-Dashboard/';");
                gitBtn.setAttribute("onclick", "window.location.href='https://github.com/Fatmoogle/Weather-Dashboard';");
                break;
            /** Employee Directory Modal **/
            case "card dir":
                // console.log("You clicked Employee Directory");
                modalBg.addClass("bg-active");
                $(".modal").find("h2").text("Employee Directory");
                $(".modal").find("p").text("Basic React Application that displays non-sensitive employee information with search functionality.");
                $(".modal").find(".technologies").text("ReactJs, JavaScript, HTML5, CSS3, Bootstrap, RandomUser API");
                appBtn.setAttribute("onclick", "window.location.href='https://fatmoogle.github.io/Employee_Directory/';");
                gitBtn.setAttribute("onclick", "window.location.href='https://github.com/Fatmoogle/Employee_Directory';");
                break;
        }
    });

    $(".modal-close").on("click", function() {
        modalBg.removeClass("bg-active");
    });

    /* Functions to change large picture background image in about me section */

    $("#profilePic2").hover(() => {
        imageUrl = "./Assets/Images/profil_pic2.jpg";
        $("#profilePic1").css('background-image', 'url(' + imageUrl + ')');
    }, () => {
        $("#profilePic1").css('background-image', 'url(' + oldImageUrl + ')');
    });

    $("#profilePic3").hover(() => {
        imageUrl = "./Assets/Images/profile_pic3.jpg";
        $("#profilePic1").css('background-image', 'url(' + imageUrl + ')');
    }, () => {
        $("#profilePic1").css('background-image', 'url(' + oldImageUrl + ')');
    });

    $("#profilePic4").hover(() => {
        imageUrl = "./Assets/Images/profile_pic4.jpg";
        $("#profilePic1").css('background-image', 'url(' + imageUrl + ')');
    }, () => {
        $("#profilePic1").css('background-image', 'url(' + oldImageUrl + ')');
    });



    /* Interesection Observer for the contact page */

    const options = {
        threshold: .3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

            /*Conditional was needed here because the observer was firing upon page load when it should not be. Now it adds and removes classes ONLY 
            if the entry is intersecting. Entry contains alot of information, so console log to see all it includes.*/
            
            if (entry.isIntersecting) {
                entry.target.classList.add('in-viewport');
                // console.log(entry.isIntersecting);
                $("#githubPin").addClass("activatedGitHub");
                $("#linkedinPin").addClass("activatedLinkedIn");
                $("#emailPin").addClass("activatedEmail");
            } else {
                entry.target.classList.remove('in-viewport');
                // console.log(entry.isIntersecting);
                $("#githubPin").removeClass("activatedGitHub");
                $("#linkedinPin").removeClass("activatedLinkedIn");
                $("#emailPin").removeClass("activatedEmail");
            }
            // console.log(entry.target);
            // $("#githubPin").addClass("activatedGitHub");
            // alert("Hey");
        })
    }, options);

    observer.observe(contactPage);
});


// entries.forEach(entry => {
//     if (entry.intersectionRatio > 0) {
//       entry.target.classList.add('in-viewport');
//     } else {
//       entry.target.classList.remove('in-viewport');
//     }
//   });
