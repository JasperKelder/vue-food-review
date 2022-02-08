<script>
export default {
  props: ['id', 'foodname', 'types', 'image'],
  computed: {
    reviewDetailsLink() {
      return this.$route.path + '/' + this.id;
    },
  },
};
</script>

<template>
  <li class="container">
    <router-link :to="reviewDetailsLink">
      <img :src="this.image" alt="Food" />
    </router-link>
    <h3 class="">{{ foodname }}</h3>
  </li>
</template>

<style scoped>
.container {
  position: relative;
  text-align: center;
  color: white;
  width: 25%;
  float: left;
  margin: auto;
  margin-bottom: 2rem;
}

img {
  width: 20rem;
  height: 20rem;
  max-width: 20rem;
  max-height: 20rem;
  border-radius: 10%;
  box-shadow: 0 0 5px #001524;
  transition-duration: 0.4s;
}

img:hover {
  box-shadow: 0 0 10px #001524;
}

h3 {
  text-decoration: none;
  color: #ffffff;
  font-size: 2rem;
  text-shadow: -2px 2px 0 #001524, 2px 2px 0 #001524, 2px -2px 0 #001524,
    -2px -2px 0 #001524;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media only screen and (max-width: 1300px) {
  .container {
    width: 33.33%;
  }
}

@media only screen and (max-width: 1000px) {
  .container {
    width: 50%;
  }
}

@media only screen and (max-width: 700px) {
  .container {
    width: 100%;
  }
}
</style>
