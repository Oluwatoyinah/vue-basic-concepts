<script setup>
const firstName = 'Oluwatoyin'
const divProps = {
  id: 'special div',
  class: 'div-class'
}

const { id, class: className } = divProps
</script>

<template>
  <h1>The introduction</h1>

  <!-- Text interpolation -->
  <p>{{ 3 * 3 }}</p>

  <p>My first name is {{ firstName }}</p>

  
 <!-- binding attributes -->
  <div :id="divProps.id" v-bind:class="divProps.class"></div>

  <div :id :class="className"></div>

  <div :="divProps"></div>
</template>

<style scoped>
.div-class {
  min-height: 30px;
  min-width: 50px;
  background-color: red;
  margin-bottom: 20px;
}
</style>
