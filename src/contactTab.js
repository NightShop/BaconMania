import { createImage, createTextNode, addToPage, deleteContent } from "./helperFunctions.js"

function createContactTab() {
    deleteContent();

    const allButtons = document.querySelectorAll("button");
    allButtons.forEach(button => button.classList.remove("active"));

    const contactButton = document.querySelector(".contactButton");
    contactButton.classList.add("active");

    const addressDiv = document.createElement("div");
    addressDiv.classList.add("addressDiv");
    let address = createTextNode("p", "Upper Trenta Valley 6", "contactInfo");
    addressDiv.appendChild(address);
     address = createTextNode("p", "Bovec, Slovenia", "contactInfo");
     addressDiv.appendChild(address);
     address = createTextNode("p", "++386 555 4127", "contactInfo");
     addressDiv.appendChild(address);
     address = createTextNode("p", "baconEverywhere@crispy.com", "contactInfo");
     addressDiv.appendChild(address);

     addToPage(addressDiv);
}

export {createContactTab};