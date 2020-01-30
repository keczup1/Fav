<template>
  <q-page class="row window-height window-width justify-center items-center" style="min-height:100%; height:100%; width: 100% !important;">
    <q-scroll-area id="createdweb" class="bg-white" style="height: 100%; width: 100%;">
      <div v-if="this.$store.getters.getCurrentProject.componentList==null">
        <template v-for="(child, index) in children" v-bind:index="index">
          <component :is="child" :key="index" v-on:click="test"></component>
        </template>
      </div>
      <div v-else>
        <EventComponent/>
      </div>
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
      ]
    }
  },
  mounted() {
    this.$root.$on('addNewDrop', this.addDroptarget);
    bus.$on('componentData', this.createElement);
    this.chosenIndex = this.$store.getters.getChosenIndex; 
    this.$root.$on('addCompList', this.addNewComp);
  },
  computed: {
    currproject() {
      return this.$store.getters.getCurrentProject;
    }
    
  },
  methods: {
    addNewComp() {
      alert("x");
      var html = '<div>try</div>';      
      var componentArray = this.$store.getters.getCurrentProject.componentList;
      alert (JSON.stringify(componentArray));
      alert(componentArray.length);
      for (var i = 0; i < componentArray.length; i++) {
        alert(JSON.stringify(componentArray[i]));
        var id=componentArray[i].id;
        alert(id);
        var name=componentArray[i].templateName;
        alert(name);
        alert(html);
        addComponent('renderdiv', 'div', id, html);
        this.createElement({'id':id, 'name':name});
      }
    },
    createElement(data) {
        while((document.getElementById(data.id)==null) || data.id==null){
            return;
        }
        var id=data.id;
        var compName=data.name;
        var ComponentCtor = Vue.extend(DComponent);
        var componentInstance = new ComponentCtor({propsData: {
           path: ''
        },
        });
        componentInstance.path=this.resolvePath(compName);
        componentInstance.$mount('#'+id);

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
      alert(event.target.id);
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