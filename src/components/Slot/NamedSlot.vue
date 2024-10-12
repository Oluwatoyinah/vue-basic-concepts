<!-- Allows multiple slot in a component and specifies where content should be based on the slot's name  -->

<template>
  <slot name="page-title">
    <!-- fallback content  -->
    <p>My title</p>
  </slot>

  <slot name="page-content"> </slot>
</template>
