<template>
  <div class="shop">
    <div class="shop__container container">
      <FilterComp 
        :categories="categories" 
        :initialCategory="selectedCategory" 
        @categoryChanged="updateCategory"
      />
      <div class="shop__cards">
        <ProductCard 
          v-for="(value, key) in filteredProductsByPage" 
          :key="key"
          :id="value.id" 
          :urlImage="value.image" 
          :name="value.title" 
          :rate="value.rating.rate" 
          :price="value.price">
        </ProductCard>
      </div>
      <div class="shop__pagination">
        <img src="../assets/ar.png" alt="" class="sh-pg__arr" @click="prevPage" :disabled="currentPage === 1">
        <span class="pg__number">{{ currentPage }} / {{ totalPages }}</span>
        <img src="../assets/ar.png" alt="" class="sh-pg__arr" @click="nextPage" :disabled="currentPage === totalPages">
      </div>
    </div>
  </div>    
</template>
  
<script setup>
import FilterComp from './FilterComp.vue';
import ProductCard from './ProductCard.vue';
import { ref, computed } from 'vue';
import { products } from '@/store/cart';

const data = ref([]);
const selectedCategory = ref('');
const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => {
    data.value = json;
    products.splice(0, products.length, ...data.value);
  });

const updateCategory = (category) => {
  selectedCategory.value = category;
  currentPage.value = 1;
};

const filteredProducts = computed(() => {
  if (!selectedCategory.value || selectedCategory.value === 'All') {
    return data.value;
  }
  return data.value.filter(product => product.category === selectedCategory.value);
});

const productsPerPage = 10; 
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(filteredProducts.value.length / productsPerPage));

const filteredProductsByPage = computed(() => {
  const start = (currentPage.value - 1) * productsPerPage;
  const end = start + productsPerPage;
  return filteredProducts.value.slice(start, end);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    scrollToTop();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    scrollToTop();
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>

.shop__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
}

.shop__cards {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 30px;
    gap: 30px;
    flex-wrap: wrap;
}

.shop__pagination {
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    margin-bottom: 30px;
}

.pg__number {
    font-weight: 900;
}

.sh-pg__arr {
    cursor: pointer;
}

.sh-pg__arr:first-child {
    transform: rotate(180deg);
}

</style>
