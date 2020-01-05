<template>   
  <q-intersection class="example-item col-6">
      <q-card class="q-ma-sm" :id=template.id v-on:click="chooseTemplate(template.id)">
        <q-img :src=template.img></q-img>
        <q-card-section class="row">
          <q-card-section>
            <div class="text-subtitle2 text-center">{{ template.name }}</div>
          </q-card-section>        
        </q-card-section>
      </q-card>
  </q-intersection>
</template>

<script>
  export default {
  name: 'RecentProject',
  props: {
    template: {
      id: String,
      name: String,
      img: URL
    }
  },
  methods: {
    chooseTemplate(i) {
      this.$store.dispatch("chooseProject", i);
      document.getElementById(i).style.border = "1px solid greenyellow";
    }
  }
}
</script>

<style lang="sass" scoped>
.example-item
  height: 180px
  width: 180px
</style>