<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  padding: 1rem;
  margin: 1rem auto;
  max-width: 25rem;
  border: 4px solid #001524;
  border-radius: 3rem;
  background-color: #78290f;
  transition: box-shadow 0.4s;
}
</style>
