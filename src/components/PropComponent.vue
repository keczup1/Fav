<template>
  <component :is="dynComp"></component>
</template>
<script>
export default {  
    name: 'PropComponent',
    props: ['value', 'label', 'path'],
  computed: {
    dynComp() {
        return () => import(`./propertiesInput/${this.path}`);
    },
    componentProps: function() {
        return this.value;
    }
    
  }
};
</script>