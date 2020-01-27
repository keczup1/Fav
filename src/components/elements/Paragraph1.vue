<template>
    <p :class="myclass" :id="createID">{{text}}</p>
</template>

<script>
export default {
    data() {
        return {
        text: "Template paragraph to show you how it looks like. We are here to help you create your website. Enjoy!",
        myclass: "q-pa-md"
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