<script setup>
import { defineAsyncComponent, ref } from 'vue'

// load and render the component only when needed. For performance optimization
// Asynchronous loading, improves the initial loading time of the app
const RedBoxComponent = defineAsyncComponent(() => import('./RedBoxComponent.vue'))

const showRedBox = ref(false)
</script>

<template>
  <h1>This is the main component</h1>

  <div>
    <p>The child component is here</p>

    <div v-if="showRedBox">
      <RedBoxComponent />
    </div>
    <button @click="showRedBox = !showRedBox">Toggle child component visibility</button>
  </div>
</template>
