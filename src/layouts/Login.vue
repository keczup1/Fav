<template>
  <div class="login">
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>