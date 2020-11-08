
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const para = document.createElement('p');
    para.innerHTML = string;
    if (htmlElement.children.length > 0) {
        htmlElement.children[0].remove();
    }
    htmlElement.append(para);

};

htmlGenerator('Party Time.', partyHeader);

// var para = document.createElement("p");
// var node = document.createTextNode("This is new.");
// para.appendChild(node);
// htmlElemeent.append(para)