<template>
    <div class="card-pr">
        <div class="card-pr__container container">
            <img :src="data.image" alt="" class="card-pr__img">
            <div class="card-pr__info">
                <div class="card-pr__name">{{ data.title }}</div>
                <div class="card-pr__cat">{{ data.category }}</div>
                <div class="card-pr__desc">{{ data.description }}</div>
                <div class="card-pr__rate-num">{{ data.rating?.rate }}</div>
                <div class="pr-card__rate">
                    <span v-for="star in maxStars" :key="star" :class="['star', { filled: star <= Math.round(data.rating?.rate || 0) }]">
                        ★
                    </span>
                    <div class="card-pr__rate-cou">{{ data.rating?.count + " отзывов" }}</div>
                </div>
                <div class="card-pr__price">{{ data.price * 100 + "₽" }}</div>
                <button class="card-pr__btn">
                    Купить
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import {ref} from 'vue';

const data = ref({});
const route = useRoute();
const productId = route.params.id; 

fetch(`https://fakestoreapi.com/products/${productId}`)
.then(res => res.json())
.then(json => {
    data.value = json; 
})

const maxStars = 5; 

</script>

<style scoped>

.card-pr__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.card-pr__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    width: 50%;
}

.card-pr__img {
    width: 50%;
    height: 100%;
    background-size: cover; 
}

.card-pr__name {
    font-size: 42px;
    color: #1a1a1a;
    font-weight: 700;
}

.card-pr__cat {
    font-size: 32px;
}

.card-pr__desc {
    font-size: 38px;
}

.card-pr__rate-num {
    font-size: 40px;
    font-weight: 900;
}

.pr-card__rate {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    gap: 10px;
}

.card-pr__rate-cou {
    font-size: 28px;
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