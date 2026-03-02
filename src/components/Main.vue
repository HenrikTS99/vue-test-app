<script setup lang="ts">
import { ref } from 'vue';
const name = ref('Henrik');
</script>

<template>
    <main>
        <h1>Hello, {{ name }}!</h1>
    </main>

</template>

<style scoped></style>
