<script setup>
import { onMounted, ref } from 'vue'

const data = ref(null)

const makeRequest = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP Error, Status: ${res.status}`)
      }
      return res.json()
    })
    .then((resData) => {
      data.value = resData
    })
    .catch((error) => {
      console.log(`Error: ${error}`)
    })
}

// make request on mount  similar to useEffect with empty array dependency
onMounted(() => makeRequest())
</script>

<template>
  <h1>Data Fetching</h1>

  <button @click="makeRequest">Make request</button>

  <div>
    {{ data }}
  </div>
</template>
