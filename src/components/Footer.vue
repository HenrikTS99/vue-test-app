<script setup lang="ts">
import { ref } from 'vue';
const copyright_year = ref('2025');
const href = ref("https://scrimba.com")
</script>

<template>
    <footer>
        <p>&copy; {{ copyright_year }}</p>
        <p>Created by <a :href><span>Professor Jeffè</span></a></p>
    </footer>

</template>

<style scoped>
a {
    color: white;
}
</style>
