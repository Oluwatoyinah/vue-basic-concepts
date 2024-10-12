<script setup>
import DepartmentComponent from './DepartmentComponent.vue'
</script>

<template>
  <h1>This is my company</h1>
  <p>
    Hello guys, the goal is to pass data from my parent component (App) to my child component
    (Department) without prop drilling
  </p>

  <!-- something extra to change a variable in my parent component using $emit (components event)  -->
  <button @click="$emit('changeNameFn')">Change company name to Something</button>
  <DepartmentComponent />
</template>
