<script setup lang="ts">
import { ref } from 'vue';
const copyright_year = ref('2025');
</script>

<template>
    <footer>
        <p>&copy; {{ copyright_year }}</p>
    </footer>

</template>

<style scoped></style>
