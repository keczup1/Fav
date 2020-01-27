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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            
          </q-tab-panel>
          <q-tab-panel name="components" class="q-pa-lg">
            <div class="text-h6">Components</div>
            <div class="q-pa-md" v-for="(component, index) in componentList" v-bind:index="index" v-bind:key="component.name">
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
      componentList: this.$store.getters.getComponents
    }
  }
}
</script>