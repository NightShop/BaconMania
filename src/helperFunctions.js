function createTextNode(tag, nodeText, nodeClass) {
    const newNode = document.createElement(tag);
    if (nodeClass != "") {
        newNode.classList.add(nodeClass);
    }
    newNode.textContent = nodeText;

    return newNode;
}

function createImage(imageName, nodeClass = "") {
    const imageLink = "img/" + imageName;

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

function deleteContent () {
    let content = document.querySelector("#content");
    const body = document.querySelector("body");
    const newContent = body.removeChild(content);
    content = document.createElement("div");
    content.setAttribute("id", "content");
    body.appendChild(content);
    return content;
}

export {createTextNode, createImage, addToPage, deleteContent}