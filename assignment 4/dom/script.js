function swapTheme() {

    let box = document.getElementById("app");
    let btn = document.getElementById("swap");

    if (box.className === "day") {

        box.className = "night";
        btn.className = "button_night";

    } else {

        box.className = "day";
        btn.className = "button_day";
    }
}