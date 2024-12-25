<template>
    <div class="basc-pr" v-if="product">
        <div class="basc-pr__img-block">
            <img :src="product.image" alt="product image" class="basc-pr__img">
        </div>
        <div class="basc-pr__info">
            <div class="basc-pr__name">
                {{ product.title }}
            </div>
            <div class="basc-pr__count">
                Количество: {{ quantity }}
            </div>
            <div class="basc-pr__sum">
                Сумма: {{ Math.round(totalPrice * 100) }} ₽ 
            </div>
        </div>
        <button class="basc-pr__del" @click="removeFromCart">
            X
        </button>
    </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue';
import { products, cart } from '@/store/cart'; 

const props = defineProps({
  id: { type: Number}, 
  quantity: { type: Number}, 
});

const product = computed(() => products.find(item => item.id === props.id));

const totalPrice = computed(() => {
  return (product.value.price * props.quantity).toFixed(2); 
});

const emit = defineEmits(['remove']);

const removeFromCart = () => {
  if (cart[props.id] > 1) {
    cart[props.id]--;
  } else {
    delete cart[props.id];
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  emit('remove', props.id);
};
</script>

<style scoped>

.basc-pr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
    min-height: 260px;
    border: 2px solid #1a1a1a;
    padding: 5px;
    border-radius: 15px ;
    gap: 15px;
    
}

.basc-pr__img-block {
    min-height: 100%;   
    display: flex;
    justify-content: center;
    align-items: center;
}

.basc-pr__img {
    width: 150px;
    background-size: cover;
}

.basc-pr__info {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: auto;
    align-items: flex-start;
    gap: 10px;
    overflow-wrap: break-word;
}

.basc-pr__name {
    font-size: 1.5rem;
    font-weight: 900;
    overflow-wrap: break-word;
}

.basc-pr__sum {
    font-size: 1.5rem;
    font-weight: 900;
}

.basc-pr__count {
    font-size: 1.2rem;
    font-weight: 700;
}

.basc-pr__del {
    height: 30px;
    width: 25px;
    color: white;
    background-color: #1a1a1a;
    border: none;
    cursor: pointer;
}
.basc-pr__del:hover {
    color: aqua;
}

@media screen and (max-width: 768px) {
    .basc-pr__name {
        font-size: 1.2rem;
    }

    .basc-pr__sum {
        font-size: 1.2rem;
    }

    .basc-pr__count {
        font-size: 0.8rem;
    }
    .basc-pr__info {
        gap: 5px;
        justify-content: space-between;
    }
    .basc-pr {
        flex-direction: column;
    }
    .basc-pr__del {
        width: 100%;
    }
}
@media screen and (max-width: 320px) {
    .basc-pr__name {
        font-size: 1rem;
    }
    .basc-pr__sum {
        font-size: 1rem;
    }
}

</style>