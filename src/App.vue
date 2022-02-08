<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
};
</script>

<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-family: 'Roboto', sans-serif;
  background: #ffecd1;
}

body {
  margin: 0;
  color: #ffecd1;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

::-webkit-scrollbar {
  width: 1rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 15px #001524;
  background-color: #15616d;
  height: 10px;
}

::-webkit-scrollbar-thumb {
  border: 3px solid #001524;
  border-radius: 10px;
}
</style>
