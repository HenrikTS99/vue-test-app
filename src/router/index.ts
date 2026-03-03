import { createRouter, createWebHistory } from 'vue-router';
import TestView from '@/views/TestView.vue';
import CounterView from '@/views/CounterView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TestView
    },
    {
      path: '/counter',
      name: 'Counter',
      component: CounterView
    },
  ],
});

export default router;


