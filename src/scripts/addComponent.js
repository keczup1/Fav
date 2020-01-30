export default function(parentId, elementTag, elementId, html) { 
    alert("halooooo");   
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.setAttribute('class', "droptarget");
    newElement.setAttribute('v-on:dbclick', "test");
    newElement.innerHTML = html;
    p.appendChild(newElement);
}