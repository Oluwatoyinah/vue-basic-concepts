<script setup>
// A composable created to avoid repititive logic
import { useCount } from '@/composables/useCount'

// creating an instance of the composable and overiding the 0 default value with 15
let studentNo = useCount(15)
</script>

<template>
  <h1>School Name: Oluwatoyin Private School</h1>
  <p>No of Students: {{ studentNo.count }}</p>

  <div>
    <button @click="studentNo.decrease">Decrease student No</button
    ><button @click="studentNo.increase">Increase student No</button>
  </div>
</template>
