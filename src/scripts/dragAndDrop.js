import onDrop from './onDrop'
export default function() {

 
    //drag and drop

document.addEventListener("dragenter", function(event) {
  event.preventDefault();
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
    var list, i;
    list = document.getElementsByClassName('droptarget');
    for (i = 0; i < list.length; ++i) {
      list[i].style.backgroundColor="#e6ffe6";
      list[i].style.border = "1px solid #cccccc";
    }
  });

  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  document.addEventListener("drop", onDrop);

  document.addEventListener("dragend", function(event) {
    event.target.style.opacity = "1";
    var list, i;
    list = document.getElementsByClassName('droptarget');
    for (i = 0; i < list.length; ++i) {
      list[i].style.backgroundColor="";
      list[i].style.border="";
    }
    });
}