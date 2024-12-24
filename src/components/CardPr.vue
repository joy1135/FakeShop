<template>
    <div class="card-pr">
        <div class="card-pr__container container">
            <div class="card-pr__main">
                <div class="card-pt__img-block">
                    <img :src="data.image" alt="" class="card-pr__img">
                </div>
                <div class="card-pr__info">
                    <div class="card-pr__name">{{ data.title }}</div>
                    <div class="card-pr__cat">{{ data.category }}</div>
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
            <div class="card-pr__foot">
                <div class="card-pr__txt">
                    О товаре
                </div>
                <div class="card-pr__desc">{{ data.description }}</div>
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

.card-pr {
    padding-top: 20px;
}

.card-pr__container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.card-pr__main {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.card-pr__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    width: 40%;
    overflow-wrap: break-word;
}

.card-pt__img-block {
    width: 60%;
    min-height: 100%;   
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-pr__btn {
    color: white;
    font-size: 2rem;
    background-color: rgb(85, 255, 47);
    margin-right: auto;
    padding: 15px 70px;
    border: 0;
    border-radius: 15px;
    cursor: pointer;
}

.card-pr__btn:hover {
    background-color: rgb(70, 198, 41);
}

.card-pr__img {
    width: 380px;
    background-size: cover; 
}

.card-pr__name {
    font-size: 2.625rem;
    color: #1a1a1a;
    font-weight: 700;
}

.card-pr__cat {
    font-size: 2rem;
}

.card-pr__foot {
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 2.375rem;
}

.card-pr__txt {
    font-weight: 700;
}

.card-pr__desc {
    font-size: 2rem;
}

.card-pr__price {
    font-size: 5.125rem;
    font-weight: 900;
}

.card-pr__rate-num {
    font-size: 4.375rem;
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
    font-size: 1.75rem;
}

.star {
  font-size: 2rem;
  color: #ccc;
  margin: 0 2px;
  transition: color 0.3s;
}

.star.filled {
  color: #ffc107;
}

@media screen and (max-width: 1024px) {
    .card-pr__btn {
        font-size: 2rem;
    }
    .card-pr__name {
        font-size: 2.4rem;
    }
    .card-pr__cat {
        font-size: 1.8rem;
    }
    .card-pr__foot {
        font-size: 2.375rem;
    }
    .card-pr__desc {
        font-size: 1.8rem;
    }
    .card-pr__price {
        font-size: 5rem;
    }
    .card-pr__rate-num {
        font-size: 4.175rem;
    }
    .card-pr__rate-cou {
        font-size: 1.35rem;
    }
    .star {
        font-size: 1.8rem;
    }
    .pr-card__rate {
        gap: 5px;
    }
    .card-pr__img {
        width: 340px;
    }
}
@media screen and (max-width: 768px) {
    .card-pr__btn {
        font-size: 2rem;
        padding: 13px 60px;
    }
    .card-pr__name {
        font-size: 2.2rem;
    }
    .card-pr__cat {
        font-size: 1.6rem;
    }
    .card-pr__foot {
        font-size: 2.375rem;
    }
    .card-pr__desc {
        font-size: 1.8rem;
    }
    .card-pr__price {
        font-size: 3rem;
    }
    .card-pr__rate-num {
        font-size: 3rem;
    }
    .card-pr__rate-cou {
        font-size: 1.05rem;
    }
    .star {
        font-size: 1.6rem;
    }
    .pr-card__rate {
        gap: 3px;
    }
    .card-pr__img {
        width: 310px;
    }
}
@media screen and (max-width: 576px) {
    .card-pr__main {
        flex-direction: column;
        gap: 20px;
    }
    .card-pr__info {
        width: 100%;
    }
    .card-pt__img-block {
        width: 100%;
    }
    .card-pr__desc {
        font-size: 1.4rem;
    }
    .card-pr__btn {
        margin-right: 0;
        margin: auto;
    }
}
@media screen and (max-width: 320px) {
    .card-pr__img {
        width: 280px;
    }
    .card-pr__name {
        font-size: 1.8rem;
    }
    .card-pr__cat {
        font-size: 1.6rem;
    }
}

</style>