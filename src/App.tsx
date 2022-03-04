import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import TodoList from "./TodoList";

export type tasksType = {
	id: string
	title: string
	isDone: boolean
}

export type tasksValueType = `all` | `completed` | `uncompleted`

const initialTasks: tasksType[] = [
	{id: v1(), title: "1ое дело", isDone: true},
	{id: v1(), title: "2ое дело", isDone: false},
	{id: v1(), title: "3е дело", isDone: false},
	{id: v1(), title: "4е дело", isDone: false},
	{id: v1(), title: "5е дело", isDone: false},
	{id: v1(), title: "6е дело", isDone: false},
	{id: v1(), title: "7е дело", isDone: false},
]


function App() {

	const [tasks, setTasks] = useState(initialTasks)
	const [filter, setFilter] = useState(`all`)

	function 	addTitle(inpTitle:string) {
		setTasks([...tasks, {id: v1(), title: inpTitle, isDone: false},])
	}

	function changeTitleStatus(taskID:string, isDoneTask: boolean) {
		setTasks([...tasks.map(el=> el.id === taskID ? {...el, isDone: !isDoneTask} : el)])
	}

	function removeTitle(taskID:string) {
		console.log(37)
		setTasks([...tasks.filter(el=> el.id !== taskID)])
	}


	let currentTasks = tasks
	if (filter === `completed`) currentTasks =	tasks.filter(el=> el.isDone)
	if (filter === `uncompleted`) currentTasks = tasks.filter(el=> !el.isDone)

	function sortTitlesOnButtonStatus(value: tasksValueType){
		setFilter(value)
	}




	return (
		<div className="App">

					<TodoList
						tasks = {currentTasks}
						weekTitle={`Понедельник`}
						addTitle={addTitle}
						changeTitleStatus={changeTitleStatus}
						removeTitle={removeTitle}
						sortTitlesOnButtonStatus={sortTitlesOnButtonStatus}
						filter={filter}
					/>



		</div>
	);
}

export default App;
