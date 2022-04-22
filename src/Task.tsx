import {tasksType} from "./AppWithRedux";
import React, {useCallback} from "react";
import {Checkbox, IconButton} from "@mui/material";
import {EditableSpan} from "./EditableSpan";
import DeleteIcon from "@mui/icons-material/Delete";
import {v1} from "uuid";
import {
	addTitleTasksAC,
	changeTitleStatusAC,
	onChangeTaskTitleNameAC,
	removeTitleTasksAC
} from "./reducers/tasksReducer";
import {useDispatch} from "react-redux";

type TaskPropsType = {
	//changeTitleStatus: (dayID: string, taskID: string, isDone: boolean) => void
	//removeTitle: (dayID: string, taskID: string) => void
	// onChangeTaskTitleName: (dayID: string,
	// 						taskID: string,
	// 						newTitle: string) => void
	dayID: string
	el: tasksType

}
export const Task = React.memo((props: TaskPropsType) => {

	const { el, dayID } = props
	const dispatch = useDispatch()



	const onChangeTaskTitleName = useCallback((dayID: string,
											   taskID: string,
											   newTitle: string) => {
		console.log(newTitle)
		//setTasks({...tasks, [dayID]: tasks[dayID].map(el => el.id === taskID? {...el, title: newTitle}: el)	})
		// tasksDispatch(onChangeTaskTitleNameAC(dayID, taskID, newTitle))
		dispatch(onChangeTaskTitleNameAC(dayID, taskID, newTitle))
	}, [dispatch])
	// function onChangeTaskTitleName(
	// 	dayID: string,
	// 	taskID: string,
	// 	newTitle: string
	// ) {
	// 	console.log(newTitle)
	// 	//setTasks({...tasks, [dayID]: tasks[dayID].map(el => el.id === taskID? {...el, title: newTitle}: el)	})
	// 	// tasksDispatch(onChangeTaskTitleNameAC(dayID, taskID, newTitle))
	// 	dispatch(onChangeTaskTitleNameAC(dayID, taskID, newTitle))
	// }

	const removeTitle = useCallback((dayID: string, taskID: string) => {
		//setTasks({...tasks, [dayID]: tasks[dayID].filter(el => el.id !== taskID)})
		//tasksDispatch(removeTitleTasksAC(dayID, taskID))
		dispatch(removeTitleTasksAC(dayID, taskID))
	}, [dispatch])
	// function removeTitle(dayID: string, taskID: string) {
	//     //setTasks({...tasks, [dayID]: tasks[dayID].filter(el => el.id !== taskID)})
	//     //tasksDispatch(removeTitleTasksAC(dayID, taskID))
	//     dispatch(removeTitleTasksAC(dayID, taskID))
	// }

	const changeTitleStatus = useCallback((dayID: string,
										   taskID: string,
										   isDoneTask: boolean) => {
		//setTasks({...tasks, [dayID]: tasks[dayID].map(el => el.id === taskID ? {...el, isDone: !isDoneTask}: el)})
		// tasksDispatch(changeTitleStatusAC(dayID, taskID, isDoneTask))
		dispatch(changeTitleStatusAC(dayID, taskID, isDoneTask))
	}, [dispatch])
	// function changeTitleStatus(
	//     dayID: string,
	//     taskID: string,
	//     isDoneTask: boolean
	// ) {
	//     //setTasks({...tasks, [dayID]: tasks[dayID].map(el => el.id === taskID ? {...el, isDone: !isDoneTask}: el)})
	//     // tasksDispatch(changeTitleStatusAC(dayID, taskID, isDoneTask))
	//     dispatch(changeTitleStatusAC(dayID, taskID, isDoneTask))
	// }

	const onChangeCheckBoxHandle = useCallback(() => {
		console.log(43)
		changeTitleStatus(dayID, el.id, el.isDone)
	}, [changeTitleStatus, dayID, el.id, el.isDone])
	// function onChangeCheckBoxHandle() {
	// 	console.log(43)
	// 	props.changeTitleStatus(props.dayID, props.el.id, props.el.isDone)
	// }

	// function onChangeCheckBoxHandle() {
	// 	console.log(43)
	// 	changeTitleStatus(dayID, el.id, el.isDone)
	// }

	const onClickRemoveHandleButton = useCallback(() => {
		console.log(62)
		removeTitle(dayID, el.id)
	}, [removeTitle, dayID, el.id])
	// function onClickRemoveHandleButton() {
	// 	console.log(62)
	// 	props.removeTitle(props.dayID, props.el.id)
	// }

	const onChangeTitleHandler = useCallback((newTitle: string) => {
		onChangeTaskTitleName(dayID, el.id, newTitle)
	}, [onChangeTaskTitleName, dayID, el.id])
	// function onChangeTitleHandler(newTitle: string) {
	// 	props.onChangeTaskTitleName(props.dayID, props.el.id, newTitle)
	// }

	return (
		<div key={props.el.id} className={`tasksStyle`}>
			{/*<span>{el.title}</span>*/}

			<Checkbox
				checked={props.el.isDone}
				onChange={onChangeCheckBoxHandle}
				color={'info'}
			/>
			<EditableSpan
				title={props.el.title}
				onChange={onChangeTitleHandler}
				removeItem={onClickRemoveHandleButton}
				itemId={props.el.id}
			/>

		</div>
	)


})
