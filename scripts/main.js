let viewForm = function () {

    let statusOfForm = document.getElementById("main-form").style.display || "none";

    if (statusOfForm == "none") {
        document.getElementById("main-form").style.display = "block";
        document.getElementById("main-arrow").style.transform = "rotate(135deg)";
        document.getElementById("main-arrow").style.marginTop = "32px";
    } else {
        document.getElementById("main-form").style.display = "none";
        document.getElementById("main-arrow").style.transform = "rotate(-45deg)";
        document.getElementById("main-arrow").style.marginTop = "-7";
    }

    statusOfForm = document.getElementById("main-form").style.display;

};
