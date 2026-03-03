<script setup lang="ts">
import { } from 'vue';

const props = defineProps<{
    label: string
}>()

const emit = defineEmits<{
    (e: 'update'): void
}>()

const handleClick = () => {
    emit('update')
}

</script>

<template>
    <button @click="handleClick()">{{ label }}</button>
</template>
