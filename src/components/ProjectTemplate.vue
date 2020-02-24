<template>   
  <q-intersection class="example-item">
      <q-card class="q-ma-sm template" :id=template.id v-on:click="chooseTemplate(template.id)">
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
      var alltemplates = document.querySelectorAll('.template');
      Array.prototype.forEach.call(alltemplates, function(element) {
          element.style.border = ""
      });
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