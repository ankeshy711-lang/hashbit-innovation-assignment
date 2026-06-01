function changeColor() {

    let color =
    document.getElementById("colorbox").value;

    let text =
    document.getElementById("text-container");

    text.style.color = color;
}

function changeFontSize() {

    let size =
    document.getElementById("fontsize").value;

    let text =
    document.getElementById("text-container");

    text.style.fontSize = size + "px";
}