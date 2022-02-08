export default {
  submitReview(context, data) {
    const reviewData = {
      id: data.id,
      foodname: data.food,
      description: data.desc,
      types: data.types,
      image: data.image,
    };

    context.commit('submitReview', reviewData);
  },
};
