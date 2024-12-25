import BascComp from '@/components/BascComp.vue';
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
    {
      path: '/basc',
      name: 'basc',
      component: BascComp,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
export default router;