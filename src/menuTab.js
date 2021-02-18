import {createImage, createTextNode, addToPage, deleteContent} from "./helperFunctions.js"

function createMenuTab () {
    deleteContent();

    const allButtons = document.querySelectorAll("button");
    allButtons.forEach(button => button.classList.remove("active"));

    const menuButton = document.querySelector(".menuButton");
    menuButton.classList.add("active");

    let singleItem = document.createElement("div");
    singleItem.classList.add("singleItem");
    let title = createTextNode("h4", "Bacon Sandwich")
    singleItem.appendChild(title);
    let ingredient = createTextNode("p", "Bacon")
    singleItem.appendChild(ingredient);
    ingredient = createTextNode("p", "Chedar");
    singleItem.appendChild(ingredient);
    ingredient = createTextNode("p", "Homemade Buns");
    singleItem.appendChild(ingredient);
    ingredient = createTextNode("p", "Egg");
    singleItem.appendChild(ingredient);
    let itemPic = createImage("bacon-sandwich.jpg", "itemPic");
    singleItem.appendChild(itemPic);

    addToPage(singleItem);

    singleItem = document.createElement("div");
    singleItem.classList.add("singleItem");
    title = createTextNode("h4", "Hamburger")
    singleItem.appendChild(title);
    ingredient = createTextNode("p", "Bacon")
    singleItem.appendChild(ingredient);
    ingredient = createTextNode("p", "Chedar");
    singleItem.appendChild(ingredient);
    ingredient = createTextNode("p", "Homemade Buns");
    singleItem.appendChild(ingredient);
    ingredient = createTextNode("p", "Egg");
    singleItem.appendChild(ingredient);
    itemPic = createImage("hamburger.jpg", "itemPic");
    singleItem.appendChild(itemPic);

    addToPage(singleItem);

    singleItem = document.createElement("div");
    singleItem.classList.add("singleItem");
    title = createTextNode("h4", "Hamburger")
    singleItem.appendChild(title);
    ingredient = createTextNode("p", "Bacon")
    singleItem.appendChild(ingredient);
    ingredient = createTextNode("p", "Chedar");
    singleItem.appendChild(ingredient);
    ingredient = createTextNode("p", "Homemade Buns");
    singleItem.appendChild(ingredient);
    ingredient = createTextNode("p", "Egg");
    singleItem.appendChild(ingredient);
    itemPic = createImage("eggs.jpg", "itemPic");
    singleItem.appendChild(itemPic);

    addToPage(singleItem);
}

export {createMenuTab}