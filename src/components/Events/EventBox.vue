<script setup>
import { ref } from 'vue'

function triggerAlert() {
  alert('yooooo')
}

const eventType = 'click'
let count = ref(0)
let foods = ref(['Rice', 'beans', 'yam'])

</script>

<template>
  <h1>Events</h1>
  <button v-on:click="triggerAlert()">Click Me! using v-on:click</button>

  <button @click="triggerAlert()">Click Me 2 using @click</button>

  <button @[eventType]="triggerAlert()">Click Me 3 Using @[eventType]</button>

  <button @:click="triggerAlert()">Click Me 4 Using @:click</button>

  <div>
    <p>The count is {{ count }}</p>
    <button @mouseover="count++">Hover to increase count</button>
  </div>

  <div>
    <p>See food list: {{ foods }}</p>
    <button @click="foods.unshift('Garri')">Add Garri to the front of the list</button>
  </div>

</template>
