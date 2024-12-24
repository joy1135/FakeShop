import CardPr from '@/components/CardPr.vue';
import MainComponent from '@/components/MainComponent.vue';
import ShopComp from '@/components/ShopComp.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
      path: '/',
      name: 'main',
      component: MainComponent,
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopComp,
    },
    {
      path: '/card/:id',
      name: 'card',
      component: CardPr,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
export default router;