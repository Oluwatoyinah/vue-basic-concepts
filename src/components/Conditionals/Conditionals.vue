<script setup>
import { ref } from 'vue'

let age = 19

const userIsActive = ref(true)
</script>

<template>
  <h1>Conditionals</h1>

  <div>
    <!-- Removes from DOM -->
    <p v-if="age > 18">You are above 18</p>
    <p v-else-if="age < 18">You are underage, i.e below 18</p>
    <p v-else>You are 18</p>

    <!-- toggles Visibility i.e adds display none, advisable to use with elements condition that changes frequently -->
    <p v-show="age === 18">I am showing because you are exactly 18</p>
  </div>

  <div>
    <p>Current status: {{ userIsActive ? 'active' : 'inactive' }}</p>
    <p v-if="userIsActive">You can see this now because you are active</p>
    <p v-else>You are not active, click button below to activate</p>
    <button @click="userIsActive = !userIsActive">Toggle active status</button>
  </div>
</template>
