import React, {useCallback} from 'react'
//import { tasksType, tasksValueType } from './App'
import ButtonStatus from './ButtonStatus'
import AddItemForm from './components/AddItemForm'
import {EditableSpan} from './EditableSpan'
import {IconButton} from '@mui/material'
//import { Delete } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete'
import {daysType, tasksType, tasksValueType} from "./AppWithRedux";
import {Task} from "./Task";
import {v1} from "uuid";
import {addNewTodoEmptyListAC, addTitleTasksAC} from "./reducers/tasksReducer";
import {actions} from "./reducers/daysReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./state/store";

type TodoListType = {

	el: daysType
	//tasks: tasksType[]
	// tasks: { [key: string]: tasksType[] }
	// addTitle: (dayID: string, title: string) => void
	// changeTitleStatus: (dayID: string, taskID: string, isDone: boolean) => void
	// removeTitle: (dayID: string, taskID: string) => void
	// sortTitlesOnButtonStatus: (dayID: string, value: tasksValueType) => void
	// removeDay: (dayID: string) => void
	// onChangeTaskTitleName: (
	// 	dayID: string,
	// 	taskID: string,
	// 	newTitle: string
	// ) => void
	// onChangeWeekDayTitle: (dayID: string, newWeekDayTitle: string) => void
}

const TodoList: React.FC<TodoListType> = ({
											  // tasks,
											  el,
											  // addTitle,
											  // changeTitleStatus,
											  // removeTitle,
											  // sortTitlesOnButtonStatus,
											  // removeDay,
											  // // onChangeTaskTitleName,
											  // onChangeWeekDayTitle,
										  }) => {


	const {filter, id, title} = el
	const dispatch = useDispatch()
	const tasks = useSelector<AppRootState, { [key: string]: tasksType[] }>(state => state.tasks)

	const sortTitlesOnButtonStatus = useCallback((dayID: string, value: tasksValueType) => {
		//setDays([...days.map(el => el.id === dayID ? {...el, filter: value} : el)])  !!!!!!
		// daysDispatch(actions.sortTitlesOnButtonStatusAC(dayID, value))
		dispatch(actions.sortTitlesOnButtonStatusAC(dayID, value))
	}, [dispatch])

	const onCLickButtonStatusHandle = useCallback((dayID: string, value: tasksValueType) => {
		sortTitlesOnButtonStatus(dayID, value)
	}, [sortTitlesOnButtonStatus])

	const removeDay = useCallback((dayID: string) => {
		//setDays([...days.filter(el => el.id !== dayID)])   !!!!!!!
		// daysDispatch(actions.removeDayAC(dayID))
		dispatch(actions.removeDayAC(dayID))
		//console.log(tasks)
		delete tasks[dayID]
		//console.log(tasks)
	}, [dispatch])

	const addTitle = useCallback((dayID: string, inpTitle: string) => {
		//setTasks([...tasks, {id: v1(), title: inpTitle, isDone: false},])
		let newID = v1()
		// tasksDispatch(addTitleTasksAC(dayID, inpTitle, newID))
		dispatch(addTitleTasksAC(dayID, inpTitle, newID))
	}, [dispatch])

	const onChangeWeekDayTitle = useCallback((dayID: string, newWeekDayTitle: string) => {
		console.log(newWeekDayTitle)
		// setDays([...days.map(el => el.id === dayID ? {...el, title: newWeekDayTitle} : el)]) !!!!
		//daysDispatch(actions.onChangeWeekDayTitleAC(dayID, newWeekDayTitle))
		dispatch(actions.onChangeWeekDayTitleAC(dayID, newWeekDayTitle))
	}, [dispatch])

	// function onCLickButtonStatusHandle(dayID: string, value: tasksValueType) {
	//     sortTitlesOnButtonStatus(dayID, value)
	// }

	// let ButtonStyleALL = filter === `all` ? `active` : ``
	// let ButtonStyleCompleted = filter === `completed` ? `active` : ``
	// let ButtonStyleUnCompleted = filter === `uncompleted` ? `active` : ``

	const onChangeWeekDayTitleHandler = useCallback((newWeekDayTitle: string) => {
		onChangeWeekDayTitle(id, newWeekDayTitle)
	}, [id, onChangeWeekDayTitle])
	// function onChangeWeekDayTitleHandler(newWeekDayTitle: string) {
	//     onChangeWeekDayTitle(dayID, newWeekDayTitle)
	// }

	const currentTasks = tasks[id].filter((task) => {
		if (filter === 'completed') {
			return task.isDone
		} else if (filter === 'uncompleted') {
			return !task.isDone
		} else return task
	})
	//console.log({currentTasks, tasks})
	console.log(`TODOLIST, TODOLIST, TODOLIST`)


	// if (el.filter === `completed`)
	// 	currentTasks = tasks[el.id].filter((el) => el.isDone)
	// if (el.filter === `uncompleted`)
	// 	currentTasks = tasks[el.id].filter((el) => !el.isDone)
	return (
		<div className={`week`}>
			<div>
				<div>
					<EditableSpan
						title={title}
						onChange={onChangeWeekDayTitleHandler}
						itemId={id}
						removeItem={removeDay}
					/>
					{/*{weekTitle}*/}
					{/*<button onClick={onClickRemoveDayHandler}>X</button>*/}


				</div>

				{/*<AddItemForm addItem={addTaskHandler}/>*/}
				<AddItemForm
					//То есть мы засунули нашу функцию в useCallback, и React нам будет формировать и
					// выплёвывать из этого useCallback всякий раз один и тот же объект и у нас лишие перерисовки  уйдут.
					addItem={useCallback((newTaskTitle) => addTitle(id, newTaskTitle), [addTitle, id])}
				/>
				<>
					{/*<input type={"text"} value={title}*/}
					{/*			 onChange={onChangeInputHandle}*/}
					{/*			 onKeyPress={onKeyPressInputHandle}*/}
					{/*			 // onBlur={onBlurInputHandle}*/}
					{/*			 className={InputStyle}*/}
					{/*/>*/}
					{/*<button onClick={onCLickButtonHandle}>+</button>*/}
					{/*<div className={`errorStyle`}>*/}
					{/*	{error}*/}
					{/*</div>*/}
				</>
				{currentTasks.map((el) => <Task

					el={el}
					key={el.id}
					dayID={id}
					//taskID={}

				/>)}

				<>
					{/*<button onClick={() => onCLickButtonStatusHandle(dayID, `all`)}*/}
					{/*				className={ButtonStyleALL}>*/}
					{/*	all*/}
					{/*</button>*/}
					{/*<button onClick={() => onCLickButtonStatusHandle(dayID, `completed`)}*/}
					{/*				className={ButtonStyleCompleted}>*/}
					{/*	completed*/}
					{/*</button>*/}
					{/*<button onClick={() => onCLickButtonStatusHandle(dayID, `uncompleted`)}*/}
					{/*				className={ButtonStyleUnCompleted}>*/}
					{/*	uncompleted*/}
					{/*</button>*/}
				</>

				<ButtonStatus
					onCLickButtonStatusHandle={onCLickButtonStatusHandle}
					dayID={id}
					filter={filter}
				/>
			</div>
		</div>
	)
}

export default React.memo(TodoList)

