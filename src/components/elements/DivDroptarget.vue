<template>
  <div class="droptarget">
    hello
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: '',
      password: '',
      loading: false,
      isPwd: true
    }
  },
  methods: {
    load: function() {
      this.loading=true;
    }
  }
}
</script>