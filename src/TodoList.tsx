import React, {ChangeEvent, useState} from 'react';
import {tasksType, tasksValueType} from "./App";

type TodoListType = {
	weekTitle: string
	tasks: tasksType[]
	addTitle: (dayID: string, title: string) => void
	changeTitleStatus: (dayID: string, taskID: string, isDone: boolean) => void
	removeTitle: (dayID: string, taskID: string) => void
	sortTitlesOnButtonStatus: (dayID: string, value: tasksValueType) => void
	filter: string
	dayID: string
	removeDay: (dayID: string) => void
}

const TodoList: React.FC<TodoListType> = ({
																						tasks,
																						weekTitle,
																						addTitle,
																						changeTitleStatus,
																						removeTitle,
																						sortTitlesOnButtonStatus,
																						filter,
																						dayID,
																						removeDay
																					}) => {

	const [title, setTitle] = useState(``)
	const [error, setError] = useState(``)

	function onCLickButtonHandle() {
		if (title.trim() !== ``) {
			addTitle(dayID, title.trim())
			setTitle(``)
		} else {
			setError(`please, enter some test`)
		}

	}

	function onChangeInputHandle(e: ChangeEvent<HTMLInputElement>) {
		console.log(e.currentTarget.value)
		let title = e.currentTarget.value
		setTitle(title)
		if (title === ``) {
			setError(`please, enter some test`)
		} else {
			setError(``)
		}
	}

	function onKeyPressInputHandle(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === `Enter`) {
			onCLickButtonHandle()
		}
	}


	function onCLickButtonStatusHandle(dayID: string, value: tasksValueType) {
		sortTitlesOnButtonStatus(dayID, value)
	}

	console.log(61, filter)
	let ButtonStyleALL = filter === `all` ? `active` : ``
	let ButtonStyleCompleted = filter === `completed` ? `active` : ``
	let ButtonStyleUnCompleted = filter === `uncompleted` ? `active` : ``

	let InputStyle = (error) ? `errorInput` : ``

	function onClickRemoveDayHandler() {
		console.log(69)
		removeDay(dayID)
	}

	function onBlurInputHandle(e: React.FocusEvent<HTMLInputElement, Element>) {
		onCLickButtonHandle()
	}

	return (
		<div>
			<div>
				{weekTitle}
				<button onClick={onClickRemoveDayHandler}>X</button>
			</div>
			<input type={"text"} value={title}
						 onChange={onChangeInputHandle}
						 onKeyPress={onKeyPressInputHandle}
						 onBlur={onBlurInputHandle}
						 className={InputStyle}
			/>
			<button onClick={onCLickButtonHandle}>+</button>
			<div className={`errorStyle`}>
				{error}
			</div>
			{tasks.map(el => {
				function onChangeCheckBoxHandle() {
					console.log(43)
					changeTitleStatus(dayID, el.id, el.isDone)
				}

				function onClickRemoveHandleButton() {
					console.log(62)
					removeTitle(dayID, el.id)
				}

				return (
					<div key={el.id} className={`tasksStyle`}>
						{el.title}
						<input type="checkbox" checked={el.isDone} onChange={onChangeCheckBoxHandle}/>
						<button onClick={onClickRemoveHandleButton}>X</button>
					</div>


				)
			})}

			<button onClick={() => onCLickButtonStatusHandle(dayID, `all`)}
							className={ButtonStyleALL}>
				all
			</button>
			<button onClick={() => onCLickButtonStatusHandle(dayID, `completed`)}
							className={ButtonStyleCompleted}>
				completed
			</button>
			<button onClick={() => onCLickButtonStatusHandle(dayID, `uncompleted`)}
							className={ButtonStyleUnCompleted}>
				uncompleted
			</button>


		</div>
	)
		;
};

export default TodoList;
