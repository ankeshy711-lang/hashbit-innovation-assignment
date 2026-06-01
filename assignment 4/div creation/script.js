function createDiv(width, height, text) {

    let newDiv = document.createElement("div");

    newDiv.style.width = width + "px";
    newDiv.style.height = height + "px";
    newDiv.style.border = "2px solid black";
    newDiv.textContent = text;

    let container = document.getElementById("container");

    container.appendChild(newDiv);
}
createDiv(100,100,"Hello HashedBit");