import React, {useEffect, useState} from 'react';
import './App.css';
import {v1} from "uuid";
import TodoList from "./TodoList";
import AddItemForm from "./components/AddItemForm";

export type tasksType = {
	id: string
	title: string
	isDone: boolean
}

export type daysType = {
	id: string
	title: string
	filter: tasksValueType
}

export type tasksValueType = `all` | `completed` | `uncompleted`


function App() {
	const mondayID = `mondayID___v1()_with_localStarage`//v1()
	const tuesdayID = `tuesdayID___v1()_with_localStarage`//v1()
	const wednesdayID = `wednesdayID___v1()_with_localStarage`//v1()
	const thursdayID = `thursdayID___v1()_with_localStarage`//v1()
	const fridayID = `fridayID___v1()_with_localStarage`//v1()
	const saturdayID =`saturdayID___v1()_with_localStarage`// v1()
	const sundayID = `sundayID___v1()_with_localStarage`//v1()


	const initialTasks: { [key: string]: tasksType[] } = {
		[mondayID]: [
			{id: v1(), title: "1st _ job ", isDone: true},
			{id: v1(), title: "2nd _ job ", isDone: false},
			{id: v1(), title: "3th _ job ", isDone: false},
			{id: v1(), title: "4th _ job ", isDone: false},
			{id: v1(), title: "5th _ job ", isDone: false},
			{id: v1(), title: "6th _ job ", isDone: false},
			{id: v1(), title: "7th _ job ", isDone: false},
		],
		[tuesdayID]: [
			{id: v1(), title: "10th  _ job ", isDone: true},
			{id: v1(), title: "11th  _ job ", isDone: false},
			{id: v1(), title: "12th  _ job ", isDone: false},
			{id: v1(), title: "13th  _ job ", isDone: false},
			{id: v1(), title: "14th  _ job ", isDone: false},
			{id: v1(), title: "15th  _ job ", isDone: false},
			{id: v1(), title: "16th  _ job ", isDone: false},
		],
		[wednesdayID]: [
			{id: v1(), title: "17th  _ job ", isDone: true},
			{id: v1(), title: "18th  _ job ", isDone: false},
			{id: v1(), title: "19th  _ job ", isDone: false},
			{id: v1(), title: "20th  _ job ", isDone: false},
			{id: v1(), title: "21th  _ job ", isDone: false},
			{id: v1(), title: "22th  _ job ", isDone: false},
			{id: v1(), title: "23th  _ job ", isDone: false},
		],
		[thursdayID]: [
			{id: v1(), title: "25th  _ job ", isDone: true},
			{id: v1(), title: "26th  _ job ", isDone: false},
			{id: v1(), title: "27th  _ job ", isDone: false},
			{id: v1(), title: "28th  _ job ", isDone: false},
			{id: v1(), title: "29th  _ job ", isDone: false},
			{id: v1(), title: "30th  _ job ", isDone: false},
			{id: v1(), title: "31th  _ job ", isDone: false},
		],
		[fridayID]: [
			{id: v1(), title: "35th  _ job ", isDone: true},
			{id: v1(), title: "36th  _ job ", isDone: false},
			{id: v1(), title: "37th  _ job ", isDone: false},
			{id: v1(), title: "38th  _ job ", isDone: false},
			{id: v1(), title: "39th  _ job ", isDone: false},
			{id: v1(), title: "40th  _ job ", isDone: false},
			{id: v1(), title: "41th  _ job ", isDone: false},
		],
		[saturdayID]: [
			{id: v1(), title: "45th  _ job ", isDone: true},
			{id: v1(), title: "46th  _ job ", isDone: false},
			{id: v1(), title: "47th  _ job ", isDone: false},
			{id: v1(), title: "48th  _ job ", isDone: false},
			{id: v1(), title: "49th  _ job ", isDone: false},
			{id: v1(), title: "50th  _ job ", isDone: false},
			{id: v1(), title: "51th  _ job ", isDone: false},
		],
		[sundayID]: [
			{id: v1(), title: "52th  _ job ", isDone: false},
			{id: v1(), title: "53th  _ job ", isDone: false},
			{id: v1(), title: "54th  _ job ", isDone: false},
			{id: v1(), title: "55th  _ job ", isDone: false},
			{id: v1(), title: "56th  _ job ", isDone: false},
			{id: v1(), title: "57th  _ job ", isDone: false},
			{id: v1(), title: "58th  _ job ", isDone: false},
		],
	}


	const [tasks, setTasks] = useState<{ [key: string]: tasksType[] }>(initialTasks)

	const [days, setDays] = useState<daysType[]>([
			{id: mondayID, title: `Monday`, filter: "all"},
			{id: tuesdayID, title: `Tuesday`, filter: "all"},
			{id: wednesdayID, title: `Wednesday`, filter: "all"},
			{id: thursdayID, title: `Thursday`, filter: "all"},
			{id: fridayID, title: `Friday`, filter: "all"},
			{id: saturdayID, title: `Saturday`, filter: "all"},
			{id: sundayID, title: `Saturday`, filter: "all"},
		]
	)

	//const [filter, setFilter] = useState<tasksValueType>(`all`) //- убрали/переместили в 87ю строку el.filter!!!


	function addTitle(dayID: string, inpTitle: string) {
		//setTasks([...tasks, {id: v1(), title: inpTitle, isDone: false},])
		setTasks({...tasks, [dayID]: [...tasks[dayID], {id: v1(), title: inpTitle, isDone: false}]})
	}



	useEffect(()=>{
		let tasksTakenFromLocalStorageString = localStorage.getItem('tasksLocalStorage')
		if (tasksTakenFromLocalStorageString) {
			let parsedtasksObject = JSON.parse(tasksTakenFromLocalStorageString)

				console.log(parsedtasksObject)
				setTasks(parsedtasksObject)

		}
	}, [])

	useEffect(()=>localStorage.setItem(`tasksLocalStorage`, JSON.stringify(tasks) ), [tasks])


	useEffect(()=>{
		let daysTakenFromLocalStorageString = localStorage.getItem(`daysLocalStorage`)
		if (daysTakenFromLocalStorageString) {
			let parsedDaysArray = JSON.parse(daysTakenFromLocalStorageString)
			console.log(parsedDaysArray)
			setDays(parsedDaysArray)
		}
	}, [])

	useEffect(()=>localStorage.setItem(`daysLocalStorage`, JSON.stringify(days) ), [days])

	function changeTitleStatus(dayID: string, taskID: string, isDoneTask: boolean) {
		//setTasks([...tasks.map(el => el.id === taskID ? {...el, isDone: !isDoneTask} : el)])
		setTasks({
			...tasks, [dayID]: tasks[dayID].map(el => el.id === taskID
				? {...el, isDone: !isDoneTask}
				: el)
		})
	}

	function removeTitle(dayID: string, taskID: string) {
		//setTasks([...tasks.filter(el => el.id !== taskID)])
		console.log(60, {[dayID]: tasks[dayID]})
		setTasks({...tasks, [dayID]: tasks[dayID].filter(el => el.id !== taskID)})
	}

	function sortTitlesOnButtonStatus(dayID: string, value: tasksValueType) {
		setDays([...days.map(el => el.id === dayID
			? {...el, filter: value}
			: el)])
	}

	function removeDay(dayID: string) {
		setDays([...days.filter(el => el.id !== dayID)])
		//console.log(tasks)
		delete tasks[dayID]
		//console.log(tasks)
	}


	function addNewTodoList(newTodoListTitle:string) {
		let newTodoListID = v1()
		setDays([...days, {id: newTodoListID, title: newTodoListTitle, filter: "all"},])
		setTasks({...tasks, [newTodoListID]:[]})
	}

	function onChangeTaskTitle(dayID:string, taskID:string, newTitle:string) {
		console.log(newTitle)
		setTasks({...tasks, [dayID]: tasks[dayID].map(el => el.id === taskID
				? {...el, title: newTitle}
				: el)})
	}

	function onChangeWeekDayTitle(dayID:string, newWeekDayTitle:string) {
		console.log(newWeekDayTitle)
		setDays([...days.map(el=> el.id===dayID
		?{...el, title: newWeekDayTitle}
		:el)])
	}

	return (

		<div className="App">
			<h1> Todo Week Schedule</h1>

			<AddItemForm addItem={addNewTodoList}/>

			<div className="days_container">
				{days.map(el => {
					let currentTasks = tasks[el.id]
					if (el.filter === `completed`) currentTasks = tasks[el.id].filter(el => el.isDone)
					if (el.filter === `uncompleted`) currentTasks = tasks[el.id].filter(el => !el.isDone)
					return (
						<div className={`week`} key={el.id}>
							<TodoList
								key={el.id}
								dayID={el.id}
								tasks={currentTasks}
								weekTitle={el.title}
								addTitle={addTitle}
								changeTitleStatus={changeTitleStatus}
								removeTitle={removeTitle}
								sortTitlesOnButtonStatus={sortTitlesOnButtonStatus}
								filter={el.filter}
								removeDay={removeDay}
								onChangeTaskTitle={onChangeTaskTitle}
								onChangeWeekDayTitle={onChangeWeekDayTitle}

							/>
						</div>
					)
				})
				}
			</div>
		</div>
	)
		;
}

export default App;
