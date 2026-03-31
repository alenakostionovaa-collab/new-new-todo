import { defineStore } from "pinia";//создание глобального хранилища
import { compile, computed, ref, watch } from 'vue';


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

	const del = (index) => {
		todos.value.splice(index, 1);
	}

	const adit = (index) => {
		const add = prompt('adit', todos.value[index].text);
		todos.value[index].text = add;
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
	},


	{deep:true}
	)
	const todoHi =localStorage.getItem('todo')
	if(todoHi) {
	todos.value=JSON.parse(todoHi)
	}


	return {
		addTodo,
		newTodo,
		todos,
		del,
		adit,
		todoComputed,
		todoHi,
	}
})