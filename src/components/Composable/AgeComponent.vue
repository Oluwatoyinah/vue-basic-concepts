<script setup>
// A composable created to avoid repititive logic
import { useCount } from '@/composables/useCount'

// creating an instance of the counter composable
let counter = useCount()

// overiding the 0e default value with 3
// let counter = useCount(3)
</script>

<template>
  <h1>This is my age component</h1>
  <p>Age: {{ counter.count }}</p>

  <div>
    <button @click="counter.decrease">Decrease Age</button
    ><button @click="counter.increase">Increase Age</button>
  </div>
</template>
