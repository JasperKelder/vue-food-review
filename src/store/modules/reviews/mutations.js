export default {
  submitReview(state, payload) {
    state.reviews.push(payload);
  },
};
