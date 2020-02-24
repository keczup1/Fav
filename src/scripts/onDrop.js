import randomID from "./randomID"
import store from '../store/myStore'
import addComponent from './addComponent'
import { bus } from '../bus'
export default function onDrop(event) {
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
      bus.$emit('componentData', {'id':newID, 'name':compName, 'flagnew': 'true'});
    }
  }