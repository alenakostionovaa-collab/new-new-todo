<script setup>
import todo from './components/todo.vue';
//import child from './components/child.vue';


</script>

<template>
  <router-link to="/">todo list</router-link>
  <router-link to="/child">todo done</router-link>
  <router-view></router-view>
</template>
<style>
link{
    text-decoration: none;
}
</style>