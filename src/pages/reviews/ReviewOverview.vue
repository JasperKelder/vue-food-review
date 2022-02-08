<script>
import ReviewItem from '../../components/reviews/ReviewItem.vue';
import ReviewFilter from '../../components/reviews/ReviewFilter.vue';

export default {
  components: {
    ReviewItem,
    ReviewFilter,
  },
  data() {
    return {
      activeFilters: {
        breakfast: true,
        lunch: true,
        dinner: true,
      },
    };
  },
  computed: {
    filteredReviews() {
      const reviews = this.$store.getters['reviews/reviews'];
      return reviews.filter(review => {
        if (
          this.activeFilters.breakfast &&
          review.types.includes('breakfast')
        ) {
          return true;
        }
        if (this.activeFilters.lunch && review.types.includes('lunch')) {
          return true;
        }
        if (this.activeFilters.dinner && review.types.includes('dinner')) {
          return true;
        }
        return false;
      });
    },
    hasReviews() {
      return this.$store.getters['reviews/hasReviews'];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
};
</script>

<template>
  <div>
    <section>
      <review-filter @change-filter="setFilters"></review-filter>
    </section>

    <section>
      <ul v-if="hasReviews">
        <review-item
          v-for="review in filteredReviews"
          :key="review.id"
          :id="review.id"
          :foodname="review.foodname"
          :types="review.types"
          :image="review.image"
        ></review-item>
      </ul>
      <h3 v-else>No reviews found.</h3>
    </section>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
