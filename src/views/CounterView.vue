<script setup lang="ts">
import { ref, computed, watch } from 'vue';
const count = ref<number>(0)

const doubledCount = computed(() => count.value * 2);

watch(count, (newValue, oldValue) => console.log('Count updated to: ' + newValue + ". Old value was " + oldValue));

const increment = () => {
    count.value++;
}
const decrement = () => {
    count.value--;
}
</script>


<template>
    <h2>Count: {{ count }}</h2>
    <h3>Count doubled: {{ doubledCount }}</h3>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
</template>
