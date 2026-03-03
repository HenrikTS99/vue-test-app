<script setup lang="ts">

import Props from '@/components/Props.vue';
import Main from '@/components/Main.vue';
</script>

<template>
    <RouterLink to="/Counter">Go to Counter</RouterLink>
    <Props title="Test Props" subtitle="Test subtitle" />
    <Main />
</template>
