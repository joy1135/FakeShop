<template>
<div class="pr-card">
    <router-link :to="`/card/${id}`">
        <div class="pr-card__photo">
            <img :src="urlImage" alt="" class="pr-card__img">
        </div>   
    </router-link>

    <div class="pr-card__info">
        <router-link :to="`/card/${id}`">
            <div class="pr-card__name">{{ name }}</div>
            <div class="pr-card__rate">
                <span v-for="star in maxStars" :key="star" :class="['star', { filled: star <= Math.round(rate || 0) }]">
                    ★
                </span>
            </div>
            <div class="pr-card__price">{{ price*100 + "₽" }}</div>
        </router-link>
        <button class="pr-card__btn" @click="incrementCount(id)">Купить</button>
    </div>
</div>

</template>

<script setup>
import { onMounted, watch, defineProps} from 'vue';
import { cart } from '@/store/cart';



defineProps({
  urlImage: { type: String, default: '' },
  name: { type: String, default: '' },
  rate: { type: Number, default: 0 },
  price: { type: Number, default: 0 },
  id: { type: Number, default: 0 },
});

const maxStars = 5;

onMounted(() => {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    Object.assign(cart, JSON.parse(savedCart));
  }
});

watch(
  cart,
  (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
  },
  { deep: true }
);

function incrementCount(productId) {
  if (!cart[productId]) {
    cart[productId] = 0;
  }
  cart[productId] += 1;
}


</script>


<style scoped>

.pr-card {
    min-height: 500px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #1a1a1a;
    border-radius: 15px;
    cursor: pointer;
}

.pr-card__photo {
    height: 250px;
    display: flex;
    justify-content: center;
}

.pr-card__img {
    padding: 15px;
    width: 100%;
    height: 250px;
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
}

.pr-card__info {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;
    padding: 15px;
}

.pr-card__name {
    font-size: 20px;
}

.pr-card__price {
    font-size: 32px;
    font-weight: 900;
}

.pr-card__btn {
    width: 75%;
    margin: 0px auto;
    padding: 10px 0px;
    background-color: #1a1a1a;
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 24px;
}

.pr-card__btn:hover {
    color: aqua;
}

.star {
  font-size: 32px;
  color: #ccc;
  margin: 0 2px;
  transition: color 0.3s;
}

.star.filled {
  color: #ffc107;
}

</style>