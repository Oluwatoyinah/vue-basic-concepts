<script setup>
import { reactive, ref, watch } from 'vue'

const textInput = ref('')
const school = reactive({
  name: 'UI'
})

// watch(source, callback, options)
// watches for changes in textInput
watch(textInput, (newVal, oldVal) => {
  console.log({ oldVal, newVal })
})

// when using reactive, you have to provide the entire object and not just a property
watch(school, (newVal, oldVal) => {
  console.log({ oldVal, newVal })
})

// Both the new value and the old will be the same but a getter function solves this

watch(
  () => school.name,
  (newVal, oldVal) => {
    console.log({ oldVal, newVal })
  }
)

// MULTIPLES
// Use an array to pass in multiple sources
watch([() => school.name, textInput], (newVal, oldVal) => {
  console.log({ oldVal, newVal })
})
</script>

<template>
  <h1>Watchers</h1>
  <h4>Welcome to {{ school.name }}</h4>
  <p>{{ textInput }}</p>

  <input type="text" v-model="textInput" />
  <button @click="school.name = 'UNILAG'">CHange name to UNILAG</button>
</template>
