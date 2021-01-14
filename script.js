$(document).ready(function() {
    const modalBg = $(".modal-bg");
    const card = $(".card");
    const appBtn = document.querySelector("#app");
    const gitBtn = document.querySelector("#github");
    const oldImageUrl = "./Assets/Images/Profile_pic.jpg"
    let imageUrl = "";

    card.on("click", function () {
        const className = $(this).attr('class');
        switch(className) {
            /** DBUGME Modal **/
            case "card bug":
                console.log("You clicked DEBUGME");
                modalBg.addClass("bg-active");
                $(".modal").find("h2").text("DEBUGME");
                $(".modal").find("p").text("Social application where you connect with others as a student or as a mentor and share your knowledge!");
                appBtn.setAttribute("onclick", "window.location.href='https://dbugme.herokuapp.com';");
                gitBtn.setAttribute("onclick", "window.location.href='https://github.com/jesseodonoghue/project-3';");
                break;
            /** Coding Quiz! Modal **/
            case "card quiz":
                console.log("You clicked Coding Quiz!");
                modalBg.addClass("bg-active");
                $(".modal").find("h2").text("Coding Quiz!");
                $(".modal").find("p").text("Fun and silly game created using JavaScript to test your knowledge on basic coding ideas.");
                appBtn.setAttribute("onclick", "window.location.href='https://fatmoogle.github.io/Coding-Quiz/';");
                gitBtn.setAttribute("onclick", "window.location.href='https://github.com/Fatmoogle/Coding-Quiz';");
                break;
            /** Dinner Dice Modal **/
            case "card dice":
                console.log("You clicked Dinner Dice");
                modalBg.addClass("bg-active");
                $(".modal").find("h2").text("Dinner Dice");
                $(".modal").find("p").text("A mobile friendly application created to generate random recipes for drinks and food using two API’s.");
                appBtn.setAttribute("onclick", "window.location.href='https://victoriagfield.github.io/Dinner_Dice/';");
                gitBtn.setAttribute("onclick", "window.location.href='https://github.com/victoriagfield/Dinner_Dice';");
                break;
            /** Weather Dashboard Modal **/
            case "card dash":
                console.log("You clicked Weather Dashboard");
                modalBg.addClass("bg-active");
                $(".modal").find("h2").text("Weather Dashboard");
                $(".modal").find("p").text("Weather application that allows user to search for the current and 5 day forecast of a city.");
                appBtn.setAttribute("onclick", "window.location.href='https://fatmoogle.github.io/Weather-Dashboard/';");
                gitBtn.setAttribute("onclick", "window.location.href='https://github.com/Fatmoogle/Weather-Dashboard';");
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
});
