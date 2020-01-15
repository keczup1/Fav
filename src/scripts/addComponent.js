export default function(parentId, elementTag, elementId, html) {    
    var p = document.getElementById(parentId).childNodes[0];
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.setAttribute('class', "droptarget");
    newElement.setAttribute('v-on:dbclick', "test");
    newElement.innerHTML = html;
    p.appendChild(newElement);
}