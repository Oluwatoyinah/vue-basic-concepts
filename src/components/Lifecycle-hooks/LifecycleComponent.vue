<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref
} from 'vue'

const count = ref(0)

onBeforeMount(() => {
  console.log(
    'This gets triggered before the component mounts or when the component is about to get mounted'
  )
})

onMounted(() => {
  console.log('This gets triggered on mount of the component')
})

onBeforeUpdate(() => {
  console.log('This gets triggered before the component updates')
})

onUpdated(() => {
  console.log('This gets triggered when the component updates')
})

onBeforeUnmount(() => {
  console.log(
    'This gets triggered before the component unmount/ before the component is removed from the DOM'
  )
})

onUnmounted(() => {
  console.log('This gets triggered when the component unmounts/ removed from the DOM')
})
</script>

<template>
  <h1>Lifecycle</h1>
  <p>Count is: {{ count }}</p>
  <button @click="count++">Update count</button>
</template>
