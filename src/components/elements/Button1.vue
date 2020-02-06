<template>
  <div :class="myclass" :style="mystyle">
    <q-btn :class="mycompclass" :style="mycompstyle" :color="color" :label="label" :size="size" :id="createID"/>
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
  }
}
</script>