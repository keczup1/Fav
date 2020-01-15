<template>
  <q-page class="row window-height window-width justify-center items-center" style="min-height:100%; height:100%; width: 100% !important;">
    <q-scroll-area id="createdweb" class="bg-white" style="height: 100%; width: 100%;">
      <div id="div1" class="droptarget" v-on:dblclick="test" @click="testing"></div>
      <div id="div2" class="droptarget" v-on:dblclick="test"></div>
      <template v-for="(child, index) in childre" v-bind:index="index">
        <component :is="child" :key="index"></component>
      </template>
    </q-scroll-area>
  </q-page>
</template>

<script>
import DivDroptarget from '../components/elements/DivDroptarget.vue'
export default {
  data() {
    return {
    }
  },
  computed: {
    childre() {    
      return this.$store.getters.getComponent;
    }
  },
  mounted() {
    this.$root.$on('addNewDrop', this.addDroptarget);
    console.log(this.childre);
    console.log(this.$store);
  },
  methods: {
    testing() {
      alert("try");
      alert(this.$store.getters.getComponent);
    },
     addDroptarget() {
       alert("x");
      this.childre.push(DivDroptarget);
    },
    test: function() {
      event.target.style.border = "1px solid black";
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