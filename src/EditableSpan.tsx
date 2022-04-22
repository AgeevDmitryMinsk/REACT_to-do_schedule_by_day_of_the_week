import React, {ChangeEvent, useCallback, useState} from 'react'
import {IconButton, TextField} from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete";

type EditableSpanPropsType = {
	title: string
	onChange: (newValue: string) => void
	removeItem: (id: string) => void
	itemId: string
}

export const EditableSpan = React.memo((props: EditableSpanPropsType) => {
	let [editMode, setEditMode] = useState(false)
	let [title, setTitle] = useState('')

	function activateEditMode() {
		setEditMode(true)
		setTitle(props.title)
	}

	function activateViewMode() {
		setEditMode(false)
		props.onChange(title)
	}

	function onchangeTitleHandler(e: ChangeEvent<HTMLInputElement>) {
		console.log(e.currentTarget.value)
		setTitle(e.currentTarget.value)
	}

	function onKeyPressEnterHandler(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === `Enter`) {
			activateViewMode()
		}
	}

	const onClickRemoveDayHandler = useCallback(() => {
		console.log(69)
		props.removeItem(props.itemId)
	}, [props.removeItem, props.itemId])
	// function onClickRemoveDayHandler() {
	//     console.log(69)
	//     removeDay(dayID)
	// }

	// function addTaskHandler(newTaskTitle:string) {
	// 	addTitle(dayID, newTaskTitle)
	// }


	return editMode ? (
		<TextField
			variant="filled"
			size={'small'}
			onBlur={activateViewMode}
			onKeyPress={onKeyPressEnterHandler}
			value={title}
			onChange={onchangeTitleHandler}
			autoFocus={true}
		/>
	) : (
		<span onDoubleClick={activateEditMode}>{props.title}<IconButton
			onClick={onClickRemoveDayHandler}
			aria-label="delete"
			size="medium"
			color={'primary'}
		>
						<DeleteIcon/>
					</IconButton> </span>

	)
})
