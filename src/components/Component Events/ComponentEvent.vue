<script setup>
import { ref } from 'vue'

const firstName = ref('')
const email = ref('')
const password = ref('')
</script>

<template>
  <p>Passing Data from children components to parent components (props inverse)</p>
  <p>Inner component</p>

  <!-- $emit exposes event to the parent component  -->
  <button @click="$emit('InreaseCount')">Increase count</button>
  <button @click="$emit('changeName')">Change name from Bola to toyin</button>

  <!-- first arguement is the functtion, the other three are the parameters -->
  <form @submit.prevent="$emit('submitForm', firstName, email, password)">
    <input
      type="text"
      name="firstname"
      id="firstname"
      v-model="firstName"
      placeholder="Enter a firstname"
    />
    <input type="email" name="email" id="email" v-model="email" placeholder="Enter a lastname" />
    <input
      type="password"
      name="password"
      id="password"
      v-model="password"
      placeholder="Enter a password"
    />
    <button type="submit">Submit Data</button>
  </form>
</template>
