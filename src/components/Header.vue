<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute()
const emoji = ref('🦫')


</script>

<template>
    <header>
        <span>{{ emoji }}</span>
        <p>Current active path: {{ route.path }}</p>
    </header>
</template>

<style scoped>
header span {
    font-size: 3rem;
}
</style>
