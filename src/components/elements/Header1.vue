<template>
    <div :class="myclass" :id="createID">{{label}}</div>
</template>

<script>
export default {
    data() {
    return {
      label: "Sample header",
      myclass: "text-h4 q-pa-md text-center"
    }
  },
    computed: {
      createID: function() {
      var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      var uniqid = randLetter + Date.now();
      return uniqid;
    }
  }
}
</script>