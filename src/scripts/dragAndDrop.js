export default function() {
    //drag and drop

document.addEventListener("dragenter", function(event) {
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "3px dotted #cccccc";
    }
  });

  document.addEventListener("dragleave", function(event) {
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "";
    }
  });

  document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("Text", event.target.id);
    event.target.style.opacity = "0.4";
    document.getElementsByClassName('droptarget')[0].style.backgroundColor="#e6ffe6";
  });

  document.addEventListener("dragend", function(event) {
  event.target.style.opacity = "1";
  document.getElementsByClassName('droptarget')[0].style.backgroundColor="";
  });

  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
      event.target.style.border = "";
      var data = event.dataTransfer.getData("Text");
      document.getElementById(data).style.opacity = "1";
      if(data!="clone"){
      var clone = document.getElementById(data).cloneNode(true);
      clone.setAttribute("id", "clone");
      event.target.appendChild(clone);
      }
      else{
      	event.target.appendChild(document.getElementById(data));
      }
    }
  });
}