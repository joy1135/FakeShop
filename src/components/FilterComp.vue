<template>
    <div class="filter">
        <div class="shop__filters">
            <label for="category">Фильтровать по категории:</label>
            <select id="category" v-model="selectedCategory" @change="onCategoryChange">
                <option value="">Все</option>
                <option v-for="category in categories" :key="category" :value="category">
                  {{ category }}
                </option>
            </select>
        </div>
    </div>
</template>
    
<script setup>
import { ref, defineProps, defineEmits} from 'vue';

const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
  initialCategory: {
    type: String,
    default: '',
  }
});

const emit = defineEmits(['categoryChanged']);

const selectedCategory = ref(props.initialCategory);

const onCategoryChange = () => {
  emit('categoryChanged', selectedCategory.value);
};
</script>

<style scoped>

.filter {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: end;
}

.shop__filters {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
}


</style>