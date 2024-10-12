<script setup>
import { reactive, ref } from 'vue'

const firstName = ref('')
const email = ref('')
const password = ref('')

const formData = reactive({
  country: ''
})

function submitForm() {
  alert(
    `My name is ${firstName.value}. My email address is ${email.value} and ${password.value} is my password . I am from ${formData.country}`
  )
}
</script>

<template>
  <h1>Form</h1>

  <form @submit.prevent="submitForm">
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

    <input type="text" placeholder="Enter country name" v-model="formData.country" />

    <button type="submit">Submit</button>
  </form>
</template>
