<template>
    <q-intersection class="example-item">
        <q-card class="q-ma-md" v-bind:style="[project.published ? {'border': '1px solid greenyellow'} : {'border': '1px solid black'}]">
            <q-card-section>
                <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            
                <div class="absolute-top text-subtitle2 text-left row" style="color: greenyellow; font-size: 12px;"  v-if="project.published">Published</div>
                <div class="absolute-top text-subtitle2 text-left" style="color: white; font-size: 12px;"  v-else>Not published</div>
                <span class="absolute-top-right">                
                    <q-card-actions >
                        <q-btn flat round color="white" icon="highlight_off" @click="deleteproject = true"/>
                    </q-card-actions>
                </span>
                <span class="absolute-bottom-right" v-if="project.published">                
                    <q-card-actions >
                        <router-link :to="'/published/' + project.id"><q-btn flat round color="light-green-13" icon="visibility"/></router-link>
                    </q-card-actions>
                </span>
                <span class="absolute-bottom-left">                
                    <q-card-actions >
                       <router-link to="/editor"><q-btn round color="grey-8" icon="edit" @click="editProject(project.id)"/></router-link>
                    </q-card-actions>
                </span>
            </q-img>
            </q-card-section>
            <q-card-section class="row">
                <q-card-section>
                    <div class="text-h6">{{ project.name }}</div>
                    <div class="text-subtitle2">Last modification: {{ project.lastmodif }}</div>
                </q-card-section>        
            </q-card-section>
        </q-card>
        <q-dialog v-model="deleteproject">
            <q-card style="width: 1000px; max-width: 80vw;">
            <q-card-section class="row q-pa-sm q-pl-md">
            <div class="text-h6">Do you want to delete the project?</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
            </q-card-section>

            <q-card-section>
                If you delete the project, all the data will be permanently lost.
            </q-card-section>

            <q-card-section>
                <q-card-actions align="right" class="vertical-bottom">
                <q-btn flat label="Cancel" color="primary" v-close-popup />
                <q-btn flat label="Delete project" color="primary" v-close-popup @click="deleteSelectedProject(project.id, project.name)"/>
                </q-card-actions>
            </q-card-section>
            </q-card>
        </q-dialog>
    </q-intersection>
    
</template>

<script>
  export default {
  name: 'RecentProject',
  props: {
    project: {
      id: String,
      name: String,
      published: Boolean,
      lastmodif: String
    }
  },
  data() {
      return {
        deleteproject: false
      }
  },
  methods: {
      editProject(id) {
        this.$store.dispatch("chooseProject", id);
    },
    deleteSelectedProject(id, name) {
        this.$store.dispatch("deleteProject", id);
        alert("Project " + name + " deleted");
        //this.showNotif(name);
    },
    showNotif(projname) {
      this.$q.notify(projname);
    }
  }
}
</script>

<style lang="sass" scoped>
.example-item
  height: 290px
  width: 290px
</style>