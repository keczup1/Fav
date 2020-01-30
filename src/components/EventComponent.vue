<template>
    <div id="renderdiv">
    </div>
</template>

<script>
export default {
    mounted() {
        this.$root.$emit('addCompList');
    }
}
</script>