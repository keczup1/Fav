<template>
  <component :is="dynamicComponent" v-bind="componentProps" v-bind:id="createID" @click.native="sendComponentID"></component>
</template>
<script>
//import Vue from 'vue';
import { bus } from '../../bus'
export default {
  
    name: 'DComponent',
    props: ['properties', 'path'],
  computed: {
    dynamicComponent() {
      alert("my props"+ this.properties.label);
        return () => import(`./${this.path}`);
    },
    componentProps: function() {
        return this.properties;
    },
    createID: function() {
      alert("testowe "+this.label);
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();
    return uniqid;
    }
    
  },
  methods: {
    sendComponentID: function() {
      alert(this.createID);
      event.target.style.border = "1px solid black";
      //this.$store.dispatch("chooseComponentID", this.createID);
      bus.$emit('ChosenCompID', {'id':this.createID});    
    }
  }
};
</script>