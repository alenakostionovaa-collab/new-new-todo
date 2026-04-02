<script setup>
import {todoStore} from './todo'
const store = todoStore();

</script>
<template>
<div>
    <h1>todo</h1>
    <div class="todo-list">

        <div class="todo-list">
            <input  type="text" v-on:keyup.enter="store.addTodo" v-model="store.newTodo">
            <button @click="store.addTodo" >добавить</button>
            {{ store.count }}
        </div>
        <ul>
            <TransitionGroup name="fade">

                <li v-for="(todo ,index) in store.todoComputed('false')" :key="todo.id">
                    <span>{{ todo.text }}</span>
                    <input class="checkbox" type="checkbox" v-model="todo.selected" :style="{accentColor:'cadetblue'}">
                    <button class="btn-delete" @click="store.del(todo.id)">x</button>
                    <button class="btn-delete" @click="store.adit(todo.id)">adit</button>
                </li>
            </TransitionGroup>
        </ul>
        </div>
    </div>
</template>
<style>
*{
     border-radius: 5px;
color: aliceblue;
}
.todo-list{
     background-color:rgb(160, 183, 127);
}
button{
    background-color: rgb(134, 139, 136);
    border:1px solid rgb(110, 95, 95);
    margin: 5px;

}
.fade-enter-active, .fade-leave-active {
 transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
 opacity: 0;
 transform: translateY(-10px);
}
.checkbox{
    color: cadetblue;

}
</style>