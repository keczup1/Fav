<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-5">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <router-link to="/home">
            <q-btn dense flat round icon="home" color="white"/>
          </router-link>
          {{this.$store.getters.getProjectByID(this.chosenIndex).name}}
        </q-toolbar-title>
        <q-btn-dropdown id="addCell" class="absolute-center" flat :disable="disable" color="white" icon="add" label="Insert cell">
          <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">Add new cell below, above or next to existing one</q-tooltip>
          <q-list>
            <q-item clickable v-close-popup @click="addDrop">
              <q-item-section>
                <q-item-label>Bottom</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Top</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Right</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>
                <q-item-label>Left</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <q-btn class="q-mr-lg" color="purple" label="Publish" />
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
      <CreatedPage />
    </q-page-container>

  </q-layout>
</template>

<script>
import LeftDrawer from '../components/LeftDrawer.vue'
import RightDrawer from '../components/RightDrawer.vue'
import CreatedPage from '../pages/CreatedPage.vue'
import dragAndDrop from "../scripts/dragAndDrop"
export default {
  components: {
      LeftDrawer,
      RightDrawer,
      CreatedPage
    },
  data () {
    return {
      left: false,
      right: false,
      Icon: "smartphone",
      disable: false,
      chosenIndex: "0"
    }
  },
  mounted() {
    dragAndDrop(),
    this.chosenIndex = this.$store.getters.getChosenIndex;
    var tempProject = this.$store.getters.getProjectByID(this.chosenIndex);
    this.$store.dispatch("currentProjectUpdate", tempProject);
  },
  computed: {
    loadproject() {
      return this.$store.getters.getProjectByID(this.chosenIndex);
    }
  },
  methods: {
    addDrop: function() {
      this.$root.$emit('addNewDrop');
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