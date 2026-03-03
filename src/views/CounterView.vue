<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import CounterButton from '@/components/CounterButton.vue';

import { useCounter } from '@/composables/useCounter';

const { count, doubled, increment, decrement } = useCounter(0)

</script>


<template>
    <h2>Count: {{ count }}</h2>
    <h3>Count doubled: {{ doubled }}</h3>
    <CounterButton label='Increment' @update='increment' />
    <CounterButton label='Decrement' @update='decrement' />
</template>
