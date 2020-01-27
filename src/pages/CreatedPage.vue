<template>
  <q-page class="row window-height window-width justify-center items-center" style="min-height:100%; height:100%; width: 100% !important;">
    <q-scroll-area id="createdweb" class="bg-white" style="height: 100%; width: 100%;">
      <template v-for="(child, index) in children" v-bind:index="index">
        <component :is="child" :key="index" v-on:click="test"></component>
      </template>
    </q-scroll-area>
  </q-page>
</template>
<script src="system.js"></script>
<script>
import Vue from 'vue'
import DivDroptarget from '../components/elements/DivDroptarget.vue'
import {bus} from '../bus'
import DComponent from '../components/elements/DComponent.vue'
export default {
  components: {
    DComponent
  },
  data() {
    return {
      chosenIndex: '0'
    }
  },
  mounted() {
    this.$root.$on('addNewDrop', this.addDroptarget);
    bus.$on('componentData', this.createElement);
    this.chosenIndex = this.$store.getters.getChosenIndex;
    
  },
  computed: {
    children() {
      return this.$store.getters.getComponent;
    },
    
  },
  methods: {
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