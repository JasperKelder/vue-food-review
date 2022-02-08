import { createStore } from 'vuex';
import reviewsModule from './modules/reviews/index.js';

const store = createStore({
  modules: {
    reviews: reviewsModule,
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
