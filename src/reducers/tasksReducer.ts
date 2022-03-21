import {tasksType} from "../App";
//import {daysLocalStorageACType} from "./daysReducer";

export const tasksReducer = (state: { [key: string]: tasksType[] }, action: tasksReducerType): { [key: string]: tasksType[] } => {
	switch (action.title) {
		case "ADD-TITLE_TASKS": {
			console.log("ADD-TITLE_TASKS")
			let newTask = {id: action.payload.newID, title: action.payload.inpTitle, isDone: false}
			const day = state[action.payload.dayID]
			if (day) {
				day.push(newTask)
			}
			//setTasks([...tasks, {id: v1(), title: inpTitle, isDone: false},])
			return {...state}
		}
		case "REMOVE-TITLE_TASKS": {
			//console.log("REMOVE-TITLE_TASKS")
			//setTasks({...tasks, [dayID]: tasks[dayID].filter(el => el.id !== taskID)})
			const dayTasks = state[action.payload.dayID]

			if (dayTasks) {
				state[action.payload.dayID] = dayTasks.filter(el => el.id !== action.payload.taskID)
			}
			return {...state}
		}
		case "CHANGE-TITLE_TASKS-STATUS": {
			console.log("CHANGE-TITLE_TASKS-STATUS")
			const dayTasks = state[action.payload.dayID]
			if (dayTasks) {
				//setTasks({...tasks, [dayID]: tasks[dayID].map(el => el.id === taskID ? {...el, isDone: !isDoneTask}: el)})
				state[action.payload.dayID] = dayTasks.map(el => el.id === action.payload.taskID ? {
					...el,
					isDone: !action.payload.isDoneTask
				} : el)
			}
			return {...state}
		}
		case "CHANGE-TITLE_TASKS-NAME": {
			console.log("CHANGE-TITLE_TASKS-NAME")
			const dayTasks = state[action.payload.dayID]
			if (dayTasks) {
				//setTasks({...tasks, [dayID]: tasks[dayID].map(el => el.id === taskID? {...el, title: newTitle}: el)	})
				state[action.payload.dayID] = dayTasks.map(el => el.id === action.payload.taskID ? {
					...el,
					title: action.payload.newTitle
				} : el)
			}
			console.log('state', state)
			return {...state}
		}
		case "ADD-NEW-DAY": {
			console.log("ADD-NEW-DAY")
			//setTasks({...tasks, [newTodoListID]: []}
			return {...state, [action.payload.newTodoListID]: []}
		}
		case "CHANGE-LOCAL-STORAGE-TASKS": {
			return action.payload.tasks
		}


		default:
			return state

	}

}


type tasksReducerType =
	addTitleTasksACType
	| removeTitleTasksACType
	| changeTitleStatusACType
	| onChangeTaskTitleNameACType
	| addNewTodoListACType
	| tasksLocalStorageACType

export type addTitleTasksACType = ReturnType<typeof addTitleTasksAC>

export const addTitleTasksAC = (dayID: string, inpTitle: string, newID: string) => {
	return {
		title: "ADD-TITLE_TASKS",
		payload: {
			dayID, inpTitle, newID
		}
	} as const  // !!!!!!!!!!!!!!!!
}

export type removeTitleTasksACType = ReturnType<typeof removeTitleTasksAC>

export const removeTitleTasksAC = (dayID: string, taskID: string) => {
	return {
		title: "REMOVE-TITLE_TASKS",
		payload: {
			dayID, taskID
		}

	} as const
}

export type changeTitleStatusACType = ReturnType<typeof changeTitleStatusAC>
export const changeTitleStatusAC = (dayID: string, taskID: string, isDoneTask: boolean) => {
	return {
		title: "CHANGE-TITLE_TASKS-STATUS",
		payload: {
			dayID, taskID, isDoneTask
		}
	} as const
}

export type onChangeTaskTitleNameACType = ReturnType<typeof onChangeTaskTitleNameAC>
export const onChangeTaskTitleNameAC = (dayID: string, taskID: string, newTitle: string) => {
	return {
		title: "CHANGE-TITLE_TASKS-NAME",
		payload: {
			dayID, taskID, newTitle
		}
	} as const  // !!!!!!!!!!!!!!!!
}

export type addNewTodoListACType = ReturnType<typeof addNewTodoEmptyListAC>
export const addNewTodoEmptyListAC = (newTodoListID: string) => {
	return {
		title: "ADD-NEW-DAY",
		payload: {
			newTodoListID
		}
	} as const  // !!!!!!!!!!!!!!!!
}

export type tasksLocalStorageACType = ReturnType<typeof tasksLocalStorageAC>
export const tasksLocalStorageAC = (tasks: { [key: string]: tasksType[] }) => {
	return {
		title: "CHANGE-LOCAL-STORAGE-TASKS",
		payload: {
			tasks
		}
	} as const
}



