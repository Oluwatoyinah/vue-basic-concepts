<script setup>
const vStatsDiv = {
  mounted: (el, binding) => {
    // el is the target element, binding is the arguement
    el.style.height = '100px'
    el.style.width = '100px'

    // binding.value gives the argument that was passed in when using the =  notation
    el.style.border = `${binding.value}px solid green`
  }
}

const vSecondStatsDiv = {
  mounted: (el, binding) => {
    el.style.height = '100px'
    el.style.width = '100px'

    // binding.arg gives the argument that was passed in when using the : notation
    el.style.border = `${binding.arg}px solid green`
  }
}

const vStatusBar = {
  mounted: (el, binding) => {
    el.style.color = 'white'
    el.style.padding = '5px 10px'
    switch (binding.arg) {
      case 'pending':
        el.style.backgroundColor = 'orange'
        break
      case 'failed':
        el.style.backgroundColor = 'red'
        break
      case 'completed':
        el.style.backgroundColor = 'green'
        break
      default:
        el.style.backgroundColor = 'black'
    }
  }
}

// SHORTHAND
const vShorthand = (el) => (el.style.fontSize = '100px')
</script>
<template>
  <h1>Working with custom directive</h1>

  <!-- 3 will be extracted using binding.value  -->
  <div v-stats-div="3">Main Stat</div>

  <div v-second-stats-div:2>Main Stat</div>

  <div>
    <span v-status-bar:failed>Failed</span>
    <span v-status-bar:pending>Pending</span>
    <span v-status-bar:completed>Completed</span>
  </div>

  <p v-shorthand>This is the shorthand custom directive effect</p>
</template>
