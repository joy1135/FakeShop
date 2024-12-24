<template>
  <HeadeVue></HeadeVue>
  <router-view></router-view>
</template>

<script setup>
import HeadeVue from './components/HeadeVue.vue';
</script>

<style>
html {
  box-sizing: border-box;
  font-size: 16px;
  scroll-behavior: smooth;
}

*,
::after,
::before {
  box-sizing: inherit;
}
.app {
  font-size: 16px;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  background-color: white;
}

a {
  text-decoration: none;
  color: #1a1a1a;
}

.router-link-active,
.router-link-exact-active,
.router-link {
  text-decoration: none;
  color: #1a1a1a;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px;
}
@media screen and (max-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media screen and (max-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media screen and (max-width: 576px) {
  .container {
    max-width: 768px;
  }
}
@media screen and (max-width: 320px) {
  .container {
    max-width: 768px;
  }
}
</style>
