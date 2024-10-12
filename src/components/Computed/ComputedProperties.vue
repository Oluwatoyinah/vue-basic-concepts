<script setup>
import { computed, ref } from 'vue';

let currentValue = ref(1)
let computedCurrentVal = computed(() => currentValue.value ** 2)

const firstName = ref('')
const lastName = ref('')

const fullName = computed(() => firstName.value + ' ' + lastName.value)
</script>

<template>
  <div>
    <h1>Computed Properties</h1>

    <div>
      <p>Current Value: {{ currentValue }}</p>
      <p>Square of current value: {{ computedCurrentVal }}</p>

      <button @click="currentValue++">Increase current value by 1</button>
    </div>

    <input type="text" v-model="firstName" placeholder="Enter First Name" />
    <input type="text" v-model="lastName" placeholder="Enter Last Name" />
    <div>My full name is {{ fullName }}</div>
  </div>
</template>
