import { defineStore } from "pinia";//создание глобального хранилища
import {  computed, ref, watch } from 'vue';


export const todoStore = defineStore('todoStore', () => {
	const newTodo = ref('');
	const todos = ref([]);

	const addTodo = () => {
		if(newTodo.value.trim()){
			todos.value.push({
				id: Date.now(),
				text: newTodo.value,
				selected: false
			});
		}

		newTodo.value = '';
	}

	const del = (id) => {
	todos.value =(todos.value.filter(todo => todo.id !==id));
	}

	const adit = (id) => {
		const todo =(todos.value.find(todo => todo.id ===id));
		if (todo){
		const newText = prompt('adit',todo.text);
		if (newText) todo.text = newText

		}
	}

	const todoComputed = computed (() => {
		return (param) => {
			if (param === 'false'){
				return todos.value.filter(todo => todo.selected === false );
			}
			else if(param === 'true') {
				return todos.value.filter(todo => todo.selected === true);
			}
		}
	})

	watch (todos, (todo) => {
		localStorage.setItem('todo', JSON.stringify(todo) )
		 console.log('Настройки изменились')
	},{deep:true}
	)

	const todoHi =localStorage.getItem('todo')
	if(todoHi) {
	todos.value=JSON.parse(todoHi)
	}
	const count = computed(() => todos.value.length);

	return {
		addTodo,
		newTodo,
		todos,
		del,
		adit,
		todoComputed,
		count,

	}
})