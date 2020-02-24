export default function(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}