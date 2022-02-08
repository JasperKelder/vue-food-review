<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedReview: null,
    };
  },
  computed: {
    foodName() {
      return this.selectedReview.foodname;
    },
    image() {
      return this.selectedReview.image;
    },
    types() {
      return this.selectedReview.types;
    },
    description() {
      return this.selectedReview.description;
    },
  },
  created() {
    this.selectedReview = this.$store.getters['reviews/reviews'].find(
      review => review.id === this.id
    );
  },
};
</script>

<template>
  <section>
    <h1>{{ foodName }}</h1>
    <img :src="this.selectedReview.image" alt="Food" @click="$router.go(-1)" />
    <p>{{ description }}</p>
    <div class="container">
      <base-badge
        v-for="badge in types"
        :key="badge"
        :type="badge"
        :title="badge"
      >
      </base-badge>
    </div>
  </section>
</template>

<style scoped>
h1,
p,
.container {
  display: flex;
  justify-content: center;
  color: #001524;
}

h1 {
  font-size: 5rem;
  margin: 4rem;
}

p {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  max-width: 50rem;
  margin-left: 50%;
  transform: translate(-50%);
}

img {
  width: 25rem;
  height: 25rem;
  max-width: 25rem;
  max-height: 25rem;
  border-radius: 10%;
  box-shadow: 0 0 5px #001524;
  transition-duration: 0.4s;
  margin-left: 50%;
  transform: translate(-50%);
  cursor: pointer;
  margin-bottom: 3.5rem;
}

img:hover {
  box-shadow: 0 0 10px #001524;
}
</style>
