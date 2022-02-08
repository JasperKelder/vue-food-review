<script>
import ReviewForm from '../../components/reviews/ReviewForm.vue';

export default {
  components: {
    ReviewForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('reviews/submitReview', data);
      this.$router.replace('/reviews');
    },
  },
};
</script>

<template>
  <section>
    <base-card>
      <review-form @save-data="saveData"></review-form>
    </base-card>
  </section>
</template>
