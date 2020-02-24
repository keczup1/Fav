<template>
  <div class="droptarget" :id="createDivDropID"></div>
</template>

<script>
//import { bus } from '../../bus'
export default {
  data() {
    return {
      createDivDropID: this.createID()
    }
  },
  created() {
    //this.createDivDropID=this.createID();
    this.$store.dispatch("updateDroptargetID", this.createDivDropID);
  },
  methods: {
     createID() {
      var randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      var uniqid = randomLetter + Date.now();
      //this.$root.$emit('newDivDropID', uniqid);
      return uniqid;
    }
  },
  mounted() {
    
    //this.$root.$emit('newDivDropID');
    //bus.$emit('newDivDropID', {'id':this.createDivDropID});
  }
  
  
}
</script>