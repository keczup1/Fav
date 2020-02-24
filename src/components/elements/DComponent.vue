<template>
  <component class="component" :is="dynamicComponent" v-bind="properties" v-bind:id="createID" @click.native="sendComponentID"></component>
</template>
<script>
//import Vue from 'vue';
import { bus } from '../../bus'
export default {
  
    name: 'DComponent',
    //props: ['properties', 'path', 'id'],
    props: ['path', 'id'],
  computed: {
    dynamicComponent() {
      //alert("my props"+ this.properties.label);
        return () => import(`./${this.path}`);
    }/*,
    properties: function() {
        return this.properties;
    }*/,
    createID: function() {
      if(this.id!=undefined) {
        return this.id;
      }
      var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      var uniqid = randLetter + Date.now();
      return uniqid;
    }
    
  },
  methods: {
    sendComponentID: function() {
      var components = document.querySelectorAll('.component');
      Array.prototype.forEach.call(components, function(element) {
          element.style.border = ""
      });
      event.target.style.border = "1px solid black";
      //this.$store.dispatch("chooseComponentID", this.createID);
      bus.$emit('ChosenCompID', {'id':this.createID});    
    }
  }
};
</script>