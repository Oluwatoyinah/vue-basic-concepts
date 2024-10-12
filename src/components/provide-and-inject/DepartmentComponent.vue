<script setup>
import { inject } from 'vue'

const company_name = inject('companyName')
const company_type = inject('companyType')
</script>

<template>
  <h1>This is my department</h1>
  <p>
    Hello, this is the finance department of an {{ company_type }} company called {{ company_name }}
  </p>
</template>
