<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  display: inline-block;
  border: 3px solid #001524;
  border-radius: 3rem;
  background-color: #78290f;
  transition: all 0.4s;
  cursor: pointer;
  color: #ffecd1;
}

a:hover,
a:active,
button:hover,
button:active {
  box-shadow: 0 0 6px 1px #001524;
  border-color: #ff7d00;
}

.alt {
  background-color: #15616d;
}
</style>
