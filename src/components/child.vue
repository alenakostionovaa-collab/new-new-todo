<script setup>
import {todoStore} from './todo'
const store = todoStore();

</script>

<template>
    <p>lol</p>
    <ul>
        <li v-for="(todo,index) in store.todoComputed('true')" :key="todo.id">
            {{ todo.text }}
           <input :style="{accentColor:'cadetblue'}" type="checkbox" v-model="todo.selected">
        </li>
    </ul>
</template>
<style>

</style>