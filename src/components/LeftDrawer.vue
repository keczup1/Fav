<template>
    <div class="q-pa-md">
        <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="left" narrow-indicator>
            <q-tab name="tree" label="Tree" />
            <q-tab name="components" label="Components" />
        </q-tabs>
        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="tree">
            <div class="text-h6">Tree</div>

            <div class="q-pa-xs" style="max-width: 350px">
              <q-list dense bordered padding class="rounded-borders">
                <q-item clickable v-ripple
                v-for="(component, index) in currproject.componentList" v-bind:component="component" v-bind:index="index" v-bind:key="component.name">
                  <q-item-section v-on:click="sendID(component.id)">
                    {{component.name}}   
                    <q-btn dense flat round icon="edit" color="primary" @click="openDialog(component.id)"/>
                    <q-dialog v-model="changeNameDialog" persistent>
                      <q-card style="min-width: 350px">
                        <q-card-section>
                          <div class="text-h6">Change the name of the component</div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                          <q-input dense v-model="componentName" autofocus @keyup.enter="changeNameDialog = false" />
                        </q-card-section>

                        <q-card-actions align="right" class="text-primary">
                          <q-btn flat label="Cancel" v-close-popup />
                          <q-btn flat label="Change component name" v-close-popup @click="changeCompName(compID)"/>
                        </q-card-actions>
                      </q-card>
                    </q-dialog>                 
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
            
          </q-tab-panel>
          <q-tab-panel name="components" class="q-pa-lg">
            <div class="text-h6">Components</div>
            <div class="q-pa-md" v-for="(component, index) in componentsList" v-bind:index="index" v-bind:key="component.name">
              <div> {{ component.name }} </div>
              <div :id=component.id_comp draggable="true">
                <q-img :src="component.src"/>
              </div>
            </div>
            
          </q-tab-panel>
        </q-tab-panels>
    </div>
</template>

<script>
import { bus } from '../bus'
export default {
  data () {
    return {
      tab: 'tree',
      componentsList: this.$store.getters.getComponents,
      componentName: '',
      changeNameDialog: false,
      compID: ''
    }
  },
  computed: {
    currproject() {
      return this.$store.getters.getCurrentProject;
    }
  },
  methods: {
    sendID(id) {
      this.compID=id;
      var components = document.querySelectorAll('.component');
      Array.prototype.forEach.call(components, function(element) {
          element.style.border = ""
      });
      document.getElementById(id).style.border = "1px solid black";
      bus.$emit('ChosenCompID', {'id':id});
    },
    changeCompName: function(compID) {
      if(compID!='') {
        this.$store.dispatch("updateComponentName", {projID: this.currproject.id, compID: compID, name: this.componentName});
        this.compID='';
      }

    },
    openDialog: function(id) {
      this.changeNameDialog=true;
      this.compID = id;
    }
  }
}
</script>