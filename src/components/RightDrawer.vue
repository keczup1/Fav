<template>
    <div class="q-pa-md">
        <div class="text-h6">Properties</div>
        <div>No properties to show</div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$root.$on('showProps', this.showProperties);
    },
    methods: {
        showProperties() {
            alert("abc");
        }
    }
}
</script>