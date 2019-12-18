<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <LeftDrawer/>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <RightDrawer/>
    </q-drawer>

    <q-page-container class="flex row justify-center">
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
      
    }
  }
}
</script>