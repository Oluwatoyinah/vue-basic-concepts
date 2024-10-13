<script setup>
import { ref } from 'vue'

// script setup is private by default, hence parent wont be able to access anything when referencing a child

const count = ref(0)
const increaseCount = () => count.value++
const decreaseCount = () => count.value--

defineExpose({ count, increaseCount, decreaseCount }) // used to expose data for parent to use
</script>

<template>
  <div>
    <h1>Exposing data from child component</h1>
    <p>The count is {{ count }}</p>
    <button @click="decreaseCount">-</button>
    <button @click="increaseCount">+</button>
  </div>
</template>
