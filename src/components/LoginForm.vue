<template>
  <div class="q-pa-lg row window-height window-width justify-center items-center">
    <q-card flat bordered class="my-card col-3">
      <q-card-section class="row justify-center">
        <div class="text-h6">Log in</div>
      </q-card-section>

      <q-card-section class="q-pa-md q-gutter-md">
        <q-input square outlined stack-label v-model="login" lazy-rules label="Login"/>
        <q-input square outlined stack-label v-model="password" :type="isPwd ? 'password' : 'text'" label="Password">
            <template v-slot:append>
                <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd" 
                />
            </template>
        </q-input>
        <q-btn flat class="flex flex-right" label="I don't remember password" :dense="true"/>
      </q-card-section>
      <q-card-section class="row justify-center">
        <router-link to="/home"><q-btn color="primary" :loading="loading" @click="load" label="Log in" /></router-link>
      </q-card-section>

      <q-separator inset />

      <q-card-section class="row justify-center">
        <router-link to="/register"><q-btn flat label="I don't have an account" /></router-link>
      </q-card-section>
    </q-card>
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