var modalBtn = document.querySelector(".modal-btn");
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".modal-close");
console.log(modalBtn)

modalBtn.addEventListener('click', function(){
    modalBg.classList.add("bg-active");
})

modalClose.addEventListener('click', function(){
    modalBg.classList.remove("bg-active");
})





/*$("modal-btn").click(function(){
    $("modal-bg").addClass("bg-active");
})

/*$(".history").on("click", "li", function() {
    searchWeather($(this).text());
  });*/