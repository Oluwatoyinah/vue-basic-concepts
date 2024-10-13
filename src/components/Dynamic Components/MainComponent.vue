<script setup>
import { ref } from 'vue'
import FruitComponent from './FruitComponent.vue'
import LocationComponent from './LocationComponent.vue'

// by default the fruit component will show cos it's the active tab
const activeTab = ref('fruit')

const tabs = {
  fruit: FruitComponent,
  location: LocationComponent
}
</script>

<template>
  <h1>This is the main component</h1>

  <div>
    <button @click="activeTab = 'fruit'">View Fruits</button>
    <button @click="activeTab = 'location'">View Locations</button>
  </div>
  <p>Dynamic components below</p>

  <div>
    <!-- using the :is to dynamically render the components -->
    <component :is="tabs[activeTab]" />
  </div>
</template>
