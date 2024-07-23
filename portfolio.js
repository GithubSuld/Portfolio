document.addEventListener("DOMContentLoaded", function () {
    var lighting = document.getElementById("lighting");
    
    lighting.addEventListener("click", function () {
        var currentColor = document.body.style.backgroundColor;
        if (currentColor === "white") {
            document.body.style.backgroundColor = "#0C151D";
            document.body.classList.remove("light-mode");
        } else {
            document.body.style.backgroundColor = "white";
            document.body.classList.add("light-mode");
        }
    });
});
