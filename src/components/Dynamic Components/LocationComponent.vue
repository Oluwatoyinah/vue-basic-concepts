<script setup>
import { ref } from 'vue';

const LOCATIONS = ref(['Canada', 'Ikeja', 'London'])
</script>

<template>
  <h1>Locations available</h1>

  <p v-for="location in LOCATIONS" :key="location">{{ location }}</p>
</template>
