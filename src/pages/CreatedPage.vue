<template>
  <q-page class="row window-height window-width justify-center items-center" style="min-height:100%; height:100%; width: 100% !important;">
    <q-scroll-area id="createdweb" class="bg-white" style="height: 100%; width: 100%;">
      <div v-if="rendercomplist==[]">        
      </div>
      <div v-else>
        <EventComponent/>
      </div>
      <template v-for="(child, index) in children" v-bind:index="index">
          <component :is="child" :key="index"></component>
        </template>
    </q-scroll-area>
  </q-page>
</template>
<script src="system.js"></script>
<script>
import Vue from 'vue'
import DivDroptarget from '../components/elements/DivDroptarget.vue'
import EventComponent from '../components/EventComponent.vue'
import randomID from "../scripts/randomID"
import {bus} from '../bus'
import DComponent from '../components/elements/DComponent.vue'
import addComponent from '../scripts/addComponent'
export default {
  components: {
    DComponent,
    EventComponent
  },
  data() {
    return {
      chosenIndex: '0',
      children: [
        DivDroptarget
      ],
      newDivDropId: null,
      rendercomplist: []
    }
  },
  mounted() {
    this.rendercomplist=this.$store.getters.getCurrentProject
  },
  created() {
    //dodanie nowego DivDroptarget
    this.$root.$on('addNewDrop', this.addDroptarget);
    //dodanie elementu po DragandDrop
    bus.$on('componentData', this.createElement);
    this.chosenIndex = this.$store.getters.getChosenIndex; 
    //render projektu
    this.$root.$on('addCompList', this.addNewComp);
    //update ID nowego DivDroptarget
    this.newDivDropId = this.$store.getters.getCurrentDivDroptargetID;
    //this.$root.$on('newDivDropID', this.ResolveID);
    //bus.$on('newDivDropID', this.ResolveID);
  },
  computed: {
    currproject() {
      return this.$store.getters.getCurrentProject;
    },
    newDDID() {
      return this.$store.getters.getCurrentDivDroptargetID;
    }
    
  },
  methods: {
    addNewComp() {
      const myNode = document.getElementById("renderdiv");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
      var html = '<div>try</div>';  
      var componentArray = this.currproject.componentList;
      //alert (JSON.stringify(componentArray));
      for (var i = 0; i < componentArray.length; i++) {        
        //this.addDroptarget();
        //var droptargetID = this.newDDID;
        //alert(droptargetID + ' hejooocoootoooo');
        //alert(JSON.stringify(componentArray[i]));
        var id=componentArray[i].id;
        var name=componentArray[i].templateName;
        var props=componentArray[i].properties;
        addComponent('renderdiv', 'div', id, html);
        //this.createElement({'id':id, 'name':name, 'props':props, 'flagnew': 'false'});
        this.createElement({'id':id, 'name':name, 'flagnew': 'false'});
      }
    },
    ResolveID() {
      //alert(ID);
      //this.newDivDropId=ID;
    },
    createElement(data) {
        while((document.getElementById(data.id)==null) || data.id==null){
            return;
        }
        var id=data.id;
        var compName=data.name;
        var flagnewelement=data.flagnew;
        //var properties = data.props;
        //alert("my properties "+JSON.stringify(properties));
        var ComponentCtor = Vue.extend(DComponent);
        var componentInstance = new ComponentCtor({
          propsData: {path: '', id: id},
          /*propsData: {properties: properties, path: '', id: id},
          computed: {
            properties: function() {
                return properties;
            }
          } */
        });
        componentInstance.path=this.resolvePath(compName);
        componentInstance.$mount('#'+id);
        if(flagnewelement=='true') {
          this.addNewComponent(id, compName, this.currproject.id);
        }

    },
    addNewComponent(id, templateName, projID) {
      //tu tworzymy paczkę do store'a
      var component = {id: id, templateName:templateName, name:templateName, properties: {}};
      this.$store.dispatch("addNewComponent", {id: projID, component: component});
    },
    resolvePath(compname){
      compname += '.vue';
      var path=compname;
      return path; 
    },
     addDroptarget() {
      this.children.push(DivDroptarget);
    },
    test: function() {
      //event.target.style.border = "1px solid black";
    },
    changeMode: function() {
      if(this.Icon == "laptop") {
        this.Icon = "smartphone";
        document.getElementById("createdweb").style.height = "100%";
        document.getElementById("createdweb").style.width = "100%"; 
      }
      else {
        this.Icon = "laptop";
        document.getElementById("createdweb").style.height = "500px"; 
        document.getElementById("createdweb").style.width = "300px"; 
      } 
    }
  }
}
</script>

 <style lang="stylus" scoped>
 .droptarget {
   float:left;
   width:100%;
   min-height:15px;
   border:none;
  }
  .droptarget:hover{
    background-color:#e6ffe6;
  }

 </style>