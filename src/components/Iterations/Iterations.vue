<script setup>
const users = ['Bola', 'Titi', 'Shalewa']
const arrOfObj = [
  {
    name: 'Oluwatoyin',
    friends: ['yo', 'bee', 'sj']
  },
  {
    name: 'Oluwatoyin 2',
    friends: ['yo2', 'bee2', 'sj2']
  }
]

const objectList = {
  name: 'Bola',
  country: 'Nigeria',
  gender: 'Male'
}
const arrOfArr = [
  [1, 2, 3],
  ['a', 'b', 'c'],
  ['i', 'ii', 'iii']
]
</script>

<template>
  <h1>Iterations using v-for</h1>

  <div>
    <ul>
      <li v-for="(user, index) in users" :key="user">{{ user }} {{ index }}</li>
    </ul>

    <!-- DESTRUCTED -->
    <p>Destructuring</p>
    <div v-for="({ name, friends }, i) in arrOfObj" :key="i">
      <p>{{ name }}</p>
      <p v-for="friend in friends" :key="friend">
        {{ friend }}
      </p>
    </div>

    <div>
      <p>Object Iteration</p>
      <p v-for="(value, key, i) in objectList" :key="`new ${i}`">{{ key }} - {{ value }}</p>
    </div>

    <div>
      <p>Arr of arr Iteration</p>
      <p v-for="(eachArr, i) in arrOfArr" :key="`arr-bo ${i}`">
        <span v-for="(item, index) in eachArr" :key="index">{{ item }} {{ index }} - </span>
      </p>
    </div>

    <p v-for="number in 5" :key="number">
      {{ number }}
    </p>
  </div>
</template>
