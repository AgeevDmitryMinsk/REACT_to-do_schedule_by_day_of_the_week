import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
	title: string
	onChange: (newValue:string)=>void
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

	function onchangeTitleHandler(e:ChangeEvent<HTMLInputElement>) {
		console.log(e.currentTarget.value)
		setTitle(e.currentTarget.value)
	}

	return (
		editMode
			? <input onBlur={activateViewMode}
							 value={title}
							 onChange={onchangeTitleHandler}
							 autoFocus={true}/>
			: <span onDoubleClick={activateEditMode}>{props.title} </span>
	)
}
