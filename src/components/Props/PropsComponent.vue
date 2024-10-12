<script setup>
// defineProps(['name', 'age'])

// Basic Validation
// defineProps({
//   name: String,
//   age: Number
// })

// complex and custom validation
defineProps({
  name: {
    type: String,
    required: true,
    default: 'John' // default value if name props is not provided
  },
  age: {
    type: Number, // defining types
    required: true, // setting required status
    validator: (val) => val < 25 // custom validator i.e logs an error if the age is less than 25
  },
  userType: {
    type: String,
    default: 'USER',
    validator: (user) => ['ADMIN', 'SUPER_ADMIN', 'USER'].includes(user)
  }
})
</script>

<template>
  <h1>Props</h1>
  <p>Note: Props are immutable i.e their values can not be changed, they are just readonly</p>
  <p>The name passed in is {{ name }}</p>
  <p>The dynamic age passed in is {{ age }}</p>
  <p>User Type: {{ userType }}</p>
</template>
