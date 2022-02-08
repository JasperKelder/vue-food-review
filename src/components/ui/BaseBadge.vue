<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<style scoped>
.badge {
  color: #15616d;
  color: #ffecd1;
  border: 3px solid #001524;
  margin: 1.3rem;
  border-radius: 30px;
  padding: 0.5rem;
}

.breakfast {
  background-color: #15616d;
}

.lunch {
  background-color: #78290f;
}

.dinner {
  background-color: #ff7d00;
}
</style>
