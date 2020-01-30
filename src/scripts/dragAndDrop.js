import randomID from "./randomID"
import store from '../store/myStore'
import addComponent from './addComponent'
import { bus } from '../bus'
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
    var list, i;
    list = document.getElementsByClassName('droptarget');
    for (i = 0; i < list.length; ++i) {
      list[i].style.backgroundColor="#e6ffe6";
      list[i].style.border = "1px solid #cccccc";
    }
  });

  document.addEventListener("dragend", function(event) {
  event.target.style.opacity = "1";
  var list, i;
  list = document.getElementsByClassName('droptarget');
  for (i = 0; i < list.length; ++i) {
    list[i].style.backgroundColor="";
    list[i].style.border="";
  }
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
      var components=store.state.components;
      for(var i=0; i<components.length; i++) {
        if(components[i].id_comp==data) {
          var comp = components[i];
        }
      }
      var html = '<div>try</div>';
      var newID = randomID();
      addComponent(event.target.id, 'div', newID, html);
      var compName=comp.templateName;
      bus.$emit('componentData', {'id':newID, 'name':compName});
    }
  });
}