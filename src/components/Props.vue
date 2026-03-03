<script setup lang="ts">

defineProps({
    title: {
        type: String,
        default: 'Default message'
    },

    subtitle: {
        type: String,
        default: 'Default message subtitle'
    }
});
</script>

<template>
    <h1>{{ title }}</h1>
    <h3>{{ subtitle }}</h3>
</template>
