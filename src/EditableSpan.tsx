import React, {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";

type EditableSpanPropsType = {
	title: string
	onChange: (newValue: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
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

	return (
		editMode
			? <TextField variant="filled"
									 size={"small"}
									 onBlur={activateViewMode}
									 onKeyPress={onKeyPressEnterHandler}
									 value={title}
									 onChange={onchangeTitleHandler}
									 autoFocus={true}/>
			: <span onDoubleClick={activateEditMode}>{props.title} </span>
	)
}
