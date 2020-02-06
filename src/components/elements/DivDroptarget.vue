<template>
  <div class="droptarget" :id="createID"></div>
</template>

<script>
export default {
  methods: {
    createID: function() {
      alert("nojaniewiemczyID");
      var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      var uniqid = randLetter + Date.now();
      return uniqid;
    }
  }
}
</script>