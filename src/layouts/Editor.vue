<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-5">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar @click="right = !right" >
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          {{this.$store.getters.getChosenIndex}}
        </q-toolbar-title>
        <q-btn dense flat round id="mode" :icon="Icon" @click="changeMode"/>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <LeftDrawer/>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <RightDrawer/>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import LeftDrawer from '../components/LeftDrawer.vue'
import RightDrawer from '../components/RightDrawer.vue'
export default {
    components: {
        LeftDrawer,
        RightDrawer
    },
  data () {
    return {
      left: false,
      right: true,
      Icon: "smartphone"
    }
  },
  computed: {
    templateIndex() {
      return this.$store.getters.getChosenIndex;      
    }
  },
  methods: {
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

  });

  document.addEventListener("dragend", function(event) {
  event.target.style.opacity = "1";

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

</script>