import React, {ChangeEvent, useState} from 'react';
import {tasksType, tasksValueType} from "./App";

type TodoListType = {
	weekTitle: string
	tasks: tasksType[]
	addTitle: (title: string) => void
	changeTitleStatus: (taskID: string, isDone: boolean) => void
	removeTitle: (taskID: string) => void
	sortTitlesOnButtonStatus: (value: tasksValueType) => void
	filter: string
}

const TodoList: React.FC<TodoListType> = ({
																						tasks,
																						weekTitle,
																						addTitle,
																						changeTitleStatus,
																						removeTitle,
																						sortTitlesOnButtonStatus,
																						filter
																					}) => {

	const [title, setTitle] = useState(``)
	const [error, setError] = useState(``)

	function onCLickButtonHandle() {
		if (title.trim() !== ``) {
			addTitle(title.trim())
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


	function onCLickButtonStatusHandle(value: tasksValueType) {
		sortTitlesOnButtonStatus(value)
	}

	let ButtonStyleALL = filter===`all`? `active` : ``
	let ButtonStyleCompleted = filter===`completed`? `active` : ``
	let ButtonStyleUnCompleted = filter===`uncompleted`? `active` : ``

	let InputStyle = (error) ? `errorInput` : ``

	return (
		<div>
			<div>
				{weekTitle}
			</div>
			<input type={"text"} value={title}
						 onChange={onChangeInputHandle}
						 onKeyPress={onKeyPressInputHandle}
						 className={InputStyle}
			/>
			<button onClick={onCLickButtonHandle}>+</button>
			<div className={`errorStyle`}>
				{error}
			</div>
			{tasks.map(el => {
				function onChangeCheckBoxHandle() {
					console.log(43)
					changeTitleStatus(el.id, el.isDone)
				}

				function onClickRemoveHandleButton() {
					console.log(62)
					removeTitle(el.id)
				}

				return (
					<div key={el.id} className={`tasksStyle`}>
						{el.title}
						<input type="checkbox" checked={el.isDone} onChange={onChangeCheckBoxHandle}/>
						<button onClick={onClickRemoveHandleButton}>X</button>
					</div>


				)
			})}

			<button onClick={() => onCLickButtonStatusHandle(`all`)}
							className={ButtonStyleALL}>
			all
		</button>
	<button onClick={() => onCLickButtonStatusHandle(`completed`)}
					className={ButtonStyleCompleted}>
		completed
	</button>
	<button onClick={() => onCLickButtonStatusHandle(`uncompleted`)}
					className={ButtonStyleUnCompleted}>
		uncompleted
	</button>


</div>
)
	;
};

export default TodoList;
