$(document).ready(function() {

    const modalBg = $(".modal-bg");
    const card = $(".card");
    const appBtn = document.querySelector("#app");
    const gitBtn = document.querySelector("#github");
    const modal = $(".modal");
    const video = document.querySelector("iframe");
    const videoWrapper = document.querySelector(".videoWrapper");
    const oldImageUrl = "./Assets/Images/Profile_pic.jpg"
    let imageUrl = "";
    const contactPage = document.querySelector(".contact2");

    // Set modal class to modalVideo, so you can have its own class styles. So on click, set modal, to modalVideo

    card.on("click", function () {
        const className = $(this).attr('class');
        switch(className) {
            /** RGB Modal **/
            case "card rgb":
                // console.log("You clicked RGB Lightscript");
                modalBg.addClass("bg-active");
                modal.addClass("video")
                $(".modal").find("h2").text("Custom RGB Lightscript");
                $(".modal").find("p").text("A Perlin Noise inspired custom lightscript designed for SignalRGB to light up your RGB devices. Created using HTML Canvas and SignalRGB Engine.");
                $(".modal").find(".technologies").text("HTML, HTML Canvas, CSS, Javascript, SignalRGB");
                gitBtn.classList.add("btnActive");
                gitBtn.setAttribute("onclick", "window.location.href='https://github.com/Fatmoogle/SignalRGB_CustomScript';");
                appBtn.style.display = "none";
                videoWrapper.classList.add("active");
                video.style.display = "block";
                video.setAttribute("src", "https://www.youtube.com/embed/lwBYb05a0cg");
                video.setAttribute("frameborder", "0");
                break;
            /** PetsLuv Modal **/
            case "card luv":
                // console.log("You clicked PetsLuv");
                modalBg.addClass("bg-active");
                $(".modal").find("h2").text("PetsLuv");
                $(".modal").find("p").text("A gallery app for pets using React and Redux. Allows users to click and download any or all images! (Application will be live shortly)");
                $(".modal").find(".technologies").text("ReactJs, Redux, JavaScript, HTML5, CSS3, Material UI, Styled Components, Node JS, Axios");
                appBtn.setAttribute("onclick", "window.location.href='https://petsluv.herokuapp.com/';")
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
        modal.removeClass("video");
        videoWrapper.classList.remove("active");
        video.style.display = "none";
        appBtn.style.display = "block";
        gitBtn.classList.remove("btnActive");
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
        })
    }, options);
    observer.observe(contactPage);
});