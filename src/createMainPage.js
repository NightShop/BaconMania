import {createImage, createTextNode, addToPage} from "./helperFunctions.js"

function createMainPage() {
    const content = document.querySelector("#content");



    const title = createTextNode("h3", "We care about one thing...");
    addToPage(title);

    let pictureContainer = document.createElement("div");
    pictureContainer.classList.add("pictureContainer");
    content.appendChild(pictureContainer);

    let punchlineOne = createTextNode("p", `"Sizzling"...`, "punchlines");
    pictureContainer.appendChild(punchlineOne);
    let punchlineTwo = createTextNode("p", `..."Crispy"...`, "punchlines");
    pictureContainer.appendChild(punchlineTwo);
    let punchlineThree = createTextNode("p", `"Golden brown",`, "punchlines");
    pictureContainer.appendChild(punchlineThree);
    let punchlineFour = createTextNode("p", `"Salty",`, "punchlines");
    pictureContainer.appendChild(punchlineFour);
    let punchlineFive = createTextNode("p", `"Fatty"`, "punchlines");
    pictureContainer.appendChild(punchlineFive);
    let punchlineSix = createTextNode("p", `"Bacon"`, "punchlines");
    pictureContainer.appendChild(punchlineSix);

    let textContainer = createTextNode("p", "It's simple. We care about only one thing. Crispy, salty, greasy golden-brown bacon.")
    pictureContainer.appendChild(textContainer);



}

export { createMainPage };