<template>
  <component :is="dynamicComponent"></component>
</template>
<script>
//import Vue from 'vue';

export default {
    name: 'DComponent',
  props: ['path'],
  computed: {
    dynamicComponent() {
        return () => import(`./${this.path}`);
    }
  }
};
</script>