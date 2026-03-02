<script setup lang="ts">
import { ref } from 'vue';
const name = ref('Henrik');
const quote = ref("First, solve the problem. Then write the code.");

name.value = "Ikke Henrik";
</script>

<template>
    <main>
        <h1>Hello, {{ name }}!</h1>
        <p>{{ quote }}</p>
    </main>

</template>

<style scoped></style>
