<template>
    <div class="bask">
        <div class="basc__cont container">
            <div v-for="(quantity, id) in cart" :key="id" class="basc__cards">
                <BascPr :id="Number(id)" :quantity="quantity" />
            </div>
            <div class="basc__total">
                <div class="basc__text">Итоговая сумма:</div>
                <div class="basc__sum">{{ Math.round(totalPrice * 100) }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { cart, products } from '@/store/cart';
import BascPr from './BascPr.vue';

const totalPrice = computed(() => {
  return products.reduce((sum, product) => {
    if (cart[product.id]) {
      return sum + (product.price * cart[product.id]);
    }
    return sum;
  }, 0)
});
</script>

<style scoped>

.basc__cards {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.basc__total {
    background-color: white;
    color: #1a1a1a;
    border: 2px solid #1a1a1a;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 900;
    font-size: 3rem;
    margin-top: 10px;
}

@media screen and (max-width: 768px) {
    .basc__total {
        font-size: 2rem;
    }
}
@media screen and (max-width: 576px) {
    .basc__total {
        font-size: 1.5rem;
    }
}
@media screen and (max-width: 320px) {
}

</style>