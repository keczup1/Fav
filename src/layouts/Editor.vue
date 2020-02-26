<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-5">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <router-link to="/home">
            <q-btn dense flat round icon="home" color="white" class="q-pr-md"/>
          </router-link>
          {{loadproject.name}}
          <q-btn dense flat round icon="edit" color="white" @click="changeNameDialog=true"/>
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

        <q-btn class="q-mr-lg" color="purple" label="Publish" @click="doPublish" />
        <q-btn dense flat round id="mode" :icon="Icon" @click="changeMode"/>
      </q-toolbar>
    </q-header>

    <q-dialog v-model="changeNameDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Change the name of the project</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="projectname" autofocus @keyup.enter="changeNameDialog = false" />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Change project name" v-close-popup @click="changeProjectName()"/>
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="projectpublished">
      <q-card style="width: 1000px; max-width: 80vw;">
        <q-card-section class="row q-pa-sm q-pl-md">
        <div class="text-h6">Do you want to see the published project?</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
            Your project has been successfully published. If you want to see the result, click SEE PUBLISHED WEB.
        </q-card-section>

        <q-card-section>
            <q-card-actions align="right" class="vertical-bottom">
            <q-btn flat label="Back to editor" color="primary" v-close-popup />      
            <router-link :to="'/published/' + loadproject.id"><q-btn flat label="See published web" color="primary" v-close-popup/></router-link>
            </q-card-actions>
        </q-card-section>
      </q-card>
    </q-dialog>

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
import onDrop from "../scripts/onDrop"
import randomID from "../scripts/randomID"
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
      chosenIndex: "0",
      projectpublished: false,
      textUnderline: 'hello',
      changeNameDialog: false,
      projectname: ''
    }
  },
  created() {
    dragAndDrop();
    this.chosenIndex = this.$store.getters.getChosenIndex;
    var tempProject = this.$store.getters.getProjectByID(this.chosenIndex);
    if(tempProject==undefined) {
      tempProject=this.$store.getters.getTemplateByID(this.chosenIndex);
      tempProject.published = false;
      tempProject.lastmodif = this.getTodayDate();
      tempProject.id=randomID();    
      this.chosenIndex=tempProject.id;
      this.$store.dispatch("addProject", tempProject);
    }
    else {
      var today = this.getTodayDate();
      this.$store.dispatch("updateLastModifiaction", {id: this.chosenIndex, lastmod: today});
    }
    this.$store.dispatch("currentProjectUpdate", tempProject);
  },
  destroyed() {
     //alert("offf");
    //bus.$off('componentData', this.createElement)
    document.removeEventListener('drop', onDrop);

    
 },
  computed: {
    loadproject() {
      return this.$store.getters.getCurrentProject;
    }
  },
  methods: {
    getTodayDate: function() {
      var today = new Date();
      var day = String(today.getDate()).padStart(2, '0');
      var month = String(today.getMonth() + 1).padStart(2, '0');
      var year = today.getFullYear();
      today = day + '.' + month + '.' + year;
      return today;
    },
    addDrop: function() {
      this.$root.$emit('addNewDrop');
    },
    changeProjectName: function() {
      if(this.projectname!='') {
        this.$store.dispatch("updateProjectName", {id: this.chosenIndex, name: this.projectname})
      }
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
    },
    doPublish: function() {
      this.$store.dispatch("publishProject", {id: this.chosenIndex, published: true});
      this.projectpublished = true;
    }
  }
}


</script>