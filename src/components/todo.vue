<script setup>
import {todoStore} from './todo'
const store = todoStore();

</script>
<template>
<div>
    <h1>todo</h1>
<div>
    <input  type="text" v-on:keyup.enter="store.addTodo" v-model="store.newTodo">
    <button @click="store.addTodo" >добавить</button>
</div>
<ul>
    <li v-for="(todo ,index) in store.todoComputed('false')" :key="todo.id">
        <span>{{ todo.text }}</span>
        <input type="checkbox" v-model="todo.selected">
        {{ todo.selected }}
        <button @click="store.del(index)">x</button>
        <button @click="store.adit(index)">adit</button>
    </li>
</ul>


</div>
</template>
<style>
</style>