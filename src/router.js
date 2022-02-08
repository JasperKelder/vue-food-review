import { createRouter, createWebHistory } from 'vue-router';

import ReviewDetail from './pages/reviews/ReviewDetail.vue';
import ReviewsOverview from './pages/reviews/ReviewOverview.vue';
import ReviewSubmit from './pages/reviews/ReviewSubmit.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/reviews' },
    { path: '/reviews', component: ReviewsOverview },
    {
      path: '/reviews/:id',
      component: ReviewDetail,
      props: true,
      children: [],
    },
    { path: '/add', component: ReviewSubmit },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
