<script setup lang="ts">
import { ref } from 'vue';
const name = ref('Henrik');
const quote = ref("First, solve the problem. Then write the code.");
const isBtnDisabled = ref(true)

name.value = "Ikke Henrik";
</script>

<template>
    <main>
        <h1>Hello, {{ name }}!</h1>
        <p>{{ quote }}</p>
        <section id="buttons">
            <!-- Shorthand v-bind:  :disabled-->
            <button v-bind:disabled="isBtnDisabled">Another!</button>
        </section>
    </main>

</template>

<style scoped>
button:disabled {
    background: grey;
    cursor: not-allowed;
    opacity: 0.5;
}
</style>
