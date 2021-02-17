function createTextNode(tag, nodeText, nodeClass) {
    const newNode = document.createElement(tag);
    if (nodeClass != "") {
        newNode.classList.add(nodeClass);
    }
    newNode.textContent = nodeText;

    return newNode;
}

function createImage(imageName, nodeClass = "") {
    const imageLink = "../img/" + imageName;

    const newNode = document.createElement("img");
    if (nodeClass != "") {
        newNode.classList.add(nodeClass);
    }
    newNode.setAttribute("src", imageLink);
    return newNode;
}

function addToPage (node) {
    const content = document.querySelector("#content");
    content.appendChild(node);
}

export {createTextNode, createImage, addToPage}