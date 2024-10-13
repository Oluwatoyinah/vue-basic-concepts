<script setup>
import { ref } from 'vue';

const FRUITS = ref(['Apple', 'Orange', 'Banana'])
</script>

<template>
  <h1>Fruits available</h1>

  <p v-for="fruit in FRUITS" :key="fruit">{{ fruit }}</p>
</template>
