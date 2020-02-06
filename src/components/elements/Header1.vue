<template>
    <div :class="myclass" :id="createID">{{label}}</div>
</template>

<script>
export default {
    data() {
    return {
      label: "Sample header",
      myclass: "text-h4"
    }
  
  }
}
</script>