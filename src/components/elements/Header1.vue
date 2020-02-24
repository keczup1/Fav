<template>
    <div :class="myclass">{{label}}</div>
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