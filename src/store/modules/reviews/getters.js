export default {
  reviews(state) {
    return state.reviews;
  },
  hasReviews(state) {
    return state.reviews && state.reviews.length > 0;
  },
};
