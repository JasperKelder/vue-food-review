<template>
  <section>
    <base-card @click="$router.go(-1)">
      <h2>Page not found</h2>
    </base-card>
  </section>
</template>

<style scoped>
h2 {
  margin-left: 50%;
  transform: translate(-50%);
}

.card {
  cursor: pointer;
  transition: all 0.4s;
  margin-top: 5rem;
}

.card:hover {
  border-color: #ff7d00;
}
</style>
