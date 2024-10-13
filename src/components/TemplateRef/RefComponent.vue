<script setup>
import { onMounted, ref } from 'vue'
import RefInnerComponent from './RefInnerComponent.vue'

const headingRef = ref('Hello')

const inputRef = ref(null)

const childRef = ref(null)

//logs the value
console.log(headingRef.value)

onMounted(() => {
  // gets data exposed in the child component
  console.log(childRef.value)

  // logs the targeted element in the template
  console.log(headingRef.value)

  // changes color of target element to red on mount
  headingRef.value.style.color = 'red'

  // gets the input element using the ref and allowing focus on mount
  inputRef.value.focus()
})

const updateContentFn = (el) => {
  // el is the elment in the template targeted by the ref
  console.log(el)
  el.textContent = 'I am the updated text'
}
</script>
<template>
  <h1 ref="headingRef">Component</h1>

  <input type="text" name="" id="" ref="inputRef" />

  <!-- function ref  -->
  <p :ref="updateContentFn">Something goes in here</p>

  <!-- component ref  -->
  <div>
    <RefInnerComponent ref="childRef" />
  </div>
</template>
