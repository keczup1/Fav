<template>
    <q-select v-model="value" :options="options" :label="label" />
</template>

<script>
export default {
  data () {
    return {
      value: null,
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  }
}
</script>