<template>
  <div>
    <p class="q-pa-lg caption">Recent projects   
      <q-dialog v-model="newproject">
        <q-card style="width: 1000px; max-width: 80vw;">
          <q-card-section class="row q-pa-sm q-pl-md">
          <div class="text-h6">Select new project's template</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section>
            <div class="q-pa-md row">
              
                <ProjectTemplate v-for="template in this.$store.getters.getTemplateList" v-bind:template="template" v-bind:key="template.name"/>
              
            </div>
          </q-card-section>

          <q-card-section>
            <q-card-actions align="right" class="vertical-bottom">
              <q-btn flat label="Cancel" color="primary" v-close-popup />
              <q-btn flat label="Create project" color="primary" v-close-popup />
            </q-card-actions>
          </q-card-section>
        </q-card>
      </q-dialog>
    <span slot="right" class="float-right">
      <q-btn round color="primary " icon="add" @click="newproject = true">
        <q-tooltip anchor="center left" self="center right" :offset="[10, 10]">Create new project</q-tooltip>
      </q-btn>
    </span>
    </p>
    <q-separator inset />
    <router-link to="/editor"><q-btn color="primary" label="Go to editor" /></router-link>
    
    <div>
      <div class="q-pa-md row items-start q-gutter-md justify-around float-left">
        <RecentProject v-for="(project, index) in projects" v-bind:project="project" v-bind:index="index" v-bind:key="project.name"/>  
      </div>
    </div>




    <div>
      <div v-for="(a, id) in 10" v-bind:index="id" v-bind:key="a">
      <div v-on:click="test(id)">hejo </div>
      </div>
    </div>





  </div>
</template>

<script>
import RecentProject from '../components/RecentProject.vue'
import ProjectTemplate from '../components/ProjectTemplate.vue'
export default {
  name: 'main',
  components: {
    RecentProject,
    ProjectTemplate
  },
  data() {
    return {
      projects: [{
        name: 'name 1',
        published: true,
        lastmodif: '13.09.2019'
      }, {
        name: 'name 2',
        published: false,
        lastmodif: '15.10.2019'
      }, {
        name: 'name 3',
        published: false,
        lastmodif: '01.11.2019'
      }, {
        name: 'name 4',
        published: false,
        lastmodif: '02.01.2019'
      }, {
        name: 'name 5',
        published: false,
        lastmodif: '17.06.2019'
      }, {
        name: 'name 6',
        published: false,
        lastmodif: '12.06.2019'
      }],
      newproject: false
    }
  },
  computed: {
    templates() {
      return this.$store.getters.getTemplateList;
    }
  },
  methods: {
    test(ide) {
      alert(ide);
    }
  }
}

</script>

