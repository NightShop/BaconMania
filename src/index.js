import {createMainPage} from "./createMainPage.js";
import {createContactTab} from "./contactTab.js";
import {createMenuTab} from "./menuTab.js";
import {createTextNode, createImage, addToPage} from "./helperFunctions.js";



//make layout and tabs
const content = document.querySelector("#content");
const bodyTag = document.querySelector("body");
const hero = createTextNode("h1", `Welcome to "Everywhere Bacon"™`, "hero")
bodyTag.insertBefore(hero, content);

const navigation = document.createElement("div");
const homeTab = document.createElement("button");
homeTab.textContent = "Home";
homeTab.classList.add("homeButton");
homeTab.addEventListener("click", createMainPage);
navigation.appendChild(homeTab);
const menuTab = document.createElement("button");
menuTab.textContent = "Menu";
menuTab.classList.add("menuButton");
menuTab.addEventListener("click", createMenuTab);
navigation.appendChild(menuTab);
const contactTab = document.createElement("button");
contactTab.textContent = "Contact";
contactTab.classList.add("contactButton");
contactTab.addEventListener("click", createContactTab);  
navigation.appendChild(contactTab);


bodyTag.insertBefore(navigation, content);



createMainPage();