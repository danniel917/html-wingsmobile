document.querySelector(".open_nav").addEventListener("click", function() {
    document.getElementById("menu").style.height = "100vh";
});

document.querySelector(".close_nav").addEventListener("click", function() {
    document.getElementById("menu").style.height = "0%";
});