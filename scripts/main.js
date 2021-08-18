let viewForm = function () {

    let frame = function () {
        if (statusOfForm == "none") {
            document.getElementById("main-form").style.display = "block";
            document.getElementById("main-arrow").style.transform = "rotate(135deg)";
            document.getElementById("main-arrow").style.marginTop = "32px";
        } else {
            document.getElementById("main-form").style.display = "none";
            document.getElementById("main-arrow").style.transform = "rotate(-45deg)";
            document.getElementById("main-arrow").style.marginTop = "-7";
        };
    }

    let statusOfForm = document.getElementById("main-form").style.display;
    let i = setTimeout(frame(), 3);
};
