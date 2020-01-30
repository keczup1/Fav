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
                v-for="(component, index) in this.$store.getters.getCurrentProject.componentList" v-bind:component="component" v-bind:index="index" v-bind:key="component.name">
                  <q-item-section>
                    {{component.name}}
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

export default {
  data () {
    return {
      tab: 'tree',
      componentsList: this.$store.getters.getComponents
    }
  },
  computed: {
    currproject() {
      return this.$store.getters.getCurrentProject;
    }
  }
}
</script>