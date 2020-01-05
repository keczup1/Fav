<template>
    <q-intersection class="example-item col-6">
        <q-card class="q-ma-sm" v-bind:style="[project.published ? {'border': '1px solid greenyellow'} : {'border': '1px solid black'}]">
            <q-img src="https://cdn.quasar.dev/img/mountains.jpg">
            
                <div class="absolute-top text-subtitle2 text-left row" style="color: greenyellow; font-size: 12px;"  v-if="project.published">Published</div>
                <div class="absolute-top text-subtitle2 text-left" style="color: black; font-size: 12px;"  v-else>Not published</div>
                <span class="absolute-top-right">                
                    <q-card-actions >
                        <q-btn flat round color="white" icon="highlight_off" @click="deleteproject = true"/>
                    </q-card-actions>
                </span>
                <span class="absolute-bottom-right" v-if="project.published">                
                    <q-card-actions >
                        <q-btn round color="grey-8" icon="visibility"/>
                    </q-card-actions>
                </span>
            </q-img>
            <q-card-section class="column">
                <q-card-section class="row">
                    <q-card-section>
                        <div class="text-h6">{{ project.name }}</div>
                        <div class="text-subtitle2">Last modification: {{ project.lastmodif }}</div>
                    </q-card-section>        
                </q-card-section>
                <q-card-section class="row">
                    <q-card-section>
                        <router-link to="/editor"><q-btn flat color="grey-8" round icon="edit" @click="editProject(project.name)"/></router-link>
                    </q-card-section>        
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
                <q-btn flat label="Delete project" color="primary" v-close-popup />
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
      editProject(name) {
        alert(name);
        this.$store.dispatch("chooseProject", name);
    }
  }
}
</script>

<style lang="sass" scoped>
.example-item
  height: 290px
  width: 290px
</style>