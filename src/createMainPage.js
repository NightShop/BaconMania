import {createImage, createTextNode, addToPage, deleteContent} from "./helperFunctions.js"

function createMainPage() {
    const content = deleteContent();

    const allButtons = document.querySelectorAll("button");
    allButtons.forEach(button => button.classList.remove("active"));

    const homeButton = document.querySelector(".homeButton");
    homeButton.classList.add("active");

    const title = createTextNode("h3", "We care about one thing...");
    addToPage(title);

    let pictureContainer = document.createElement("div");
    pictureContainer.classList.add("pictureContainer");
    content.appendChild(pictureContainer);

    let punchlineOne = createTextNode("p", `Sizzling..`, "punchlines");
    pictureContainer.appendChild(punchlineOne);
    let punchlineTwo = createTextNode("p", `..Crispy..`, "punchlines");
    pictureContainer.appendChild(punchlineTwo);
    let punchlineThree = createTextNode("p", `..Golden brown..`, "punchlines");
    pictureContainer.appendChild(punchlineThree);
    let punchlineFour = createTextNode("p", `..Salty..`, "punchlines");
    pictureContainer.appendChild(punchlineFour);
    let punchlineFive = createTextNode("p", `..Fatty..`, "punchlines");
    pictureContainer.appendChild(punchlineFive);
    let punchlineSix = createTextNode("p", `BACON`, "punchlines");
    pictureContainer.appendChild(punchlineSix);

    let textContainer = createTextNode("p", "And that, toped with chedar.", "footprint")
    pictureContainer.appendChild(textContainer);



}

export { createMainPage };