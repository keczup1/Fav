<template>
  <div :class="myclass" :style="mystyle">
    <q-btn :class="mycompclass" :style="mycompstyle" :color="color" :label="label" :size="size" :id="createID" @click="sendProps"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: "Button",
      color: "primary",
      size: "md",
      myclass: "",
      mystyle: "display: inline-block;",
      mycompclass: "",
      mycompstyle: ""
    }
  },
    computed: {
      createID: function() {
      var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      var uniqid = randLetter + Date.now();
      return uniqid;
    }
  },
  methods: {
    sendProps: function() {
      /*for (var key in this.$data) {
        alert(key + ": " + this.$data[key]);
      }*/
      alert("hello");
          //this.$root.$emit('showProps');
      
      //event.target.style.border = "1px solid black";
    }
  }
}
</script>