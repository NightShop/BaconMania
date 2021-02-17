import { createImage, createTextNode, addToPage } from "./helperFunctions.js"

function createContactTab() {
    const phoneImage = createImage("phone.jpg")
    addToPage(phoneImage);
}

export {createContactTab};