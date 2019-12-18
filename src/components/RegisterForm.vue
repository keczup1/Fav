<template>
  <div class="q-pa-lg row window-height window-width justify-center items-center">
    <q-card flat bordered class="my-card col-3">
      <q-card-section class="row justify-center">
        <div class="text-h6">Register</div>
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
        <q-input square outlined stack-label v-model="repeatPassword" :type="isPwd2 ? 'password' : 'text'" label="Repeat password">
            <template v-slot:append>
                    <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd2 = !isPwd2"
                    />
            </template>
        </q-input>
        <q-input square outlined stack-label v-model="email" label="E-mail"/>
      </q-card-section>
      <q-card-section class="row justify-center">
        <router-link to="/home"><q-btn color="primary" :loading="loading" @click="load" label="Register" /></router-link>
      </q-card-section>

      <q-separator inset />

      <q-card-section class="row justify-center">
        <router-link to="/"><q-btn flat label="I already have an account" /></router-link>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      password: '',
      isPwd: true,
      login: '',
      repeatPassword: '',
      isPwd2: true,
      email: ''
    }
  }
}
</script>